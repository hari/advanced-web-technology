const prisma = require('../lib/db');
const authController = require('./auth');

exports.showPublicProfile = async (req, res) => {
  const [loggedInUser, user] = await Promise.all([
    authController.getCurrentUser(req),
    prisma.user.findUnique({
      where: { username: req.params.username },
    }),
  ]);

  if (!user) {
    return res.status(404).send('User not found');
  }

  const links = await prisma.link.findMany({
    where: { userId: user.id },
    orderBy: { order: 'asc' },
  });

  res.render('public', {
    profile: user,
    user: loggedInUser,
    links,
    externalProfile: user?.id !== loggedInUser?.id,
  });
};
