const prisma = require('../lib/db');
const authController = require('./auth');

exports.showProfile = async (req, res) => {
  const user = await authController.getCurrentUser(req);
  const links = await prisma.link.findMany({
    where: { userId: user.id },
    orderBy: { order: 'asc' },
  });
  res.render('profile', { user, links, externalProfile: false });
};

exports.updateProfile = async (req, res) => {
  const user = await authController.getCurrentUser(req);
  const { bio } = req.body;
  await prisma.user.update({
    where: { id: user.id },
    data: { bio },
  });
  res.redirect('/profile');
};
