const request = require('supertest');

const app = require('../app');
const prisma = require('../lib/db');

describe('Links', () => {
  let agent;
  let userId;

  beforeAll(async () => {
    agent = request.agent(app);
    await agent.post('/auth/register').send({
      username: 'linktest',
      password: 'linkpass',
      email: 'link@test.com',
      name: 'Link Test',
    });

    await agent.post('/auth/login').send({
      identifier: 'linktest',
      password: 'linkpass',
    });

    const user = await prisma.user.findFirst({
      where: { username: 'linktest' },
    });
    userId = user.id;
  });

  afterAll(async () => {
    await prisma.$disconnect();
  });

  it('should add a new link', async () => {
    const res = await agent.post('/links').send({
      url: 'https://example.com',
      title: 'Test Link',
      icon: '🔗',
    });
    expect(res.header['location']).toBe('/profile');

    const link = await prisma.link.findFirst({
      where: { userId },
    });
    expect(link).toMatchObject({
      url: 'https://example.com',
      title: 'Test Link',
      icon: '🔗',
    });
  });

  it('should not add link without required fields', async () => {
    const res = await agent.post('/links').send({
      url: 'https://example.com',
    });
    expect(res.statusCode).toBe(302);
    expect(res.header['location']).toBe('/profile');
    const profileRes = await agent.get('/profile');
    expect(profileRes.text).toContain('URL and title required');
  });

  it('should update a link', async () => {
    // Create a link first
    const link = await prisma.link.create({
      data: {
        userId,
        url: 'https://example.com',
        title: 'Original Title',
        icon: '🔗',
      },
    });

    const res = await agent.put(`/links/${link.id}`).send({
      url: 'https://updated.com',
      title: 'Updated Title',
      icon: '⭐',
    });
    expect(res.header['location']).toBe('/profile');

    const updatedLink = await prisma.link.findUnique({
      where: { id: link.id },
    });
    expect(updatedLink).toMatchObject({
      url: 'https://updated.com',
      title: 'Updated Title',
      icon: '⭐',
    });
  });

  it('should delete a link', async () => {
    // Create a link first
    const link = await prisma.link.create({
      data: {
        userId,
        url: 'https://example.com',
        title: 'Test Link',
        icon: '🔗',
      },
    });

    const res = await agent.delete(`/links/${link.id}`);
    expect(res.header['location']).toBe('/profile');

    const deletedLink = await prisma.link.findUnique({
      where: { id: link.id },
    });
    expect(deletedLink).toBeNull();
  });

  it('should not allow editing other users links', async () => {
    // Create another user and their link
    const randomId = Math.random().toString(36).substring(2, 15);
    const otherUser = await prisma.user.create({
      data: {
        username: `test-${randomId}`,
        password: 'test-pass',
        email: `test-${randomId}@test.com`,
        name: `Test ${randomId}`,
      },
    });

    const otherLink = await prisma.link.create({
      data: {
        userId: otherUser.id,
        url: 'https://example.com',
        title: 'Other Link',
        icon: '🔗',
      },
    });

    // Try to edit other user's link
    const res = await agent.put(`/links/${otherLink.id}`).send({
      url: 'https://hacked.com',
      title: 'Hacked',
      icon: '💀',
    });

    // Should redirect to profile without updating
    expect(res.header['location']).toBe('/profile');

    const unchangedLink = await prisma.link.findUnique({
      where: { id: otherLink.id },
    });
    expect(unchangedLink).toMatchObject({
      url: 'https://example.com',
      title: 'Other Link',
      icon: '🔗',
    });

    // Cleanup
    await prisma.link.delete({
      where: { id: otherLink.id },
    });
    await prisma.user.delete({
      where: { id: otherUser.id },
    });
  });
});
