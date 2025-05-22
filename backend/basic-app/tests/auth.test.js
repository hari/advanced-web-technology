const request = require('supertest');
const dotenv = require('dotenv');
const path = require('path');

// Load test environment variables
dotenv.config({ path: path.join(__dirname, '../.env.test') });

const app = require('../app');
const prisma = require('../lib/db');

describe('Auth', () => {
  afterAll(async () => {
    await prisma.$disconnect();
  });

  it('should register a new user', async () => {
    const res = await request(app).post('/auth/register').send({
      username: 'user1',
      password: 'pass1',
      email: 'hello@test.com',
      name: 'Hello',
    });
    expect(res.header['location']).toBe('/auth/login');
  });

  it('should not register duplicate user', async () => {
    await request(app).post('/auth/register').send({
      username: 'user2',
      password: 'pass2',
      email: 'hello@test.com',
      name: 'Hello',
    });
    const res = await request(app).post('/auth/register').send({
      username: 'user2',
      password: 'pass2',
      email: 'hello@test.com',
      name: 'Hello',
    });
    expect(res.text).toMatch(/Username or email already taken/);
  });

  it('should login and access protected route', async () => {
    await request(app).post('/auth/register').send({
      username: 'user3',
      password: 'pass3',
      email: 'hello@test.com',
      name: 'Hello',
    });
    const agent = request.agent(app);
    await agent.post('/auth/login').send({
      username: 'user3',
      password: 'pass3',
      email: 'hello@test.com',
      name: 'Hello',
    });
    const res = await agent.get('/');
    expect(res.text).toMatch(/Welcome to awt.link/);
  });

  it('should not access protected route when not logged in', async () => {
    const res = await request(app).get('/profile');
    expect(res.header['location']).toBe('/auth/login');
  });
});
