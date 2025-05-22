const prisma = require('../lib/db');
const authController = require('./auth');

exports.listLinks = async (req, res) => {
  const user = await authController.getCurrentUser(req);
  const links = await prisma.link.findMany({
    where: { userId: user.id },
    orderBy: { order: 'asc' },
  });
  res.render('profile', {
    user,
    links,
    error: req.session.error,
    success: req.session.success,
  });
  req.session.error = null;
  req.session.success = null;
};

exports.addLink = async (req, res) => {
  const user = await authController.getCurrentUser(req);
  const { url, title, icon } = req.body;
  if (!url || !title) {
    req.session.error = 'URL and title required';
    return res.redirect('/profile');
  }
  await prisma.link.create({ data: { userId: user.id, url, title, icon } });
  req.session.success = 'Link added!';
  res.redirect('/profile');
};

exports.editLinkForm = async (req, res) => {
  const user = await authController.getCurrentUser(req);
  const link = await prisma.link.findUnique({
    where: { id: Number(req.params.id), userId: user.id },
  });

  if (!link) {
    return res.status(404).send('Link not found');
  }

  const links = await prisma.link.findMany({
    where: { userId: user.id },
    orderBy: { order: 'asc' },
  });
  res.render('profile', { user, links, editLink: link });
};

exports.updateLink = async (req, res) => {
  const user = await authController.getCurrentUser(req);
  const { url, title, icon } = req.body;
  if (!url || !title) {
    req.session.error = 'URL and title required';
    res.status(400);
    return res.redirect('/profile');
  }

  const link = await prisma.link.findFirst({
    where: { id: Number(req.params.id) },
  });

  if (!link) {
    req.session.error = 'Link not found';
    res.status(404);
    return res.redirect('/profile');
  }

  if (link.userId !== user.id) {
    req.session.error = 'You are not authorized to update this link';
    res.status(403);
    return res.redirect('/profile');
  }

  await prisma.link.update({
    where: { id: Number(req.params.id), userId: user.id },
    data: { url, title, icon },
  });
  req.session.success = 'Link updated!';
  res.redirect('/profile');
};

exports.deleteLink = async (req, res) => {
  const user = await authController.getCurrentUser(req);
  await prisma.link.delete({
    where: { id: Number(req.params.id), userId: user.id },
  });
  req.session.success = 'Link deleted!';
  res.redirect('/profile');
};
