const prisma = require('../lib/db');
const authController = require('./auth');

exports.addFeedback = async (req, res) => {
  const user = await authController.getCurrentUser(req);
  const message = req.body.message?.trim();
  const links = await prisma.link.findMany({
    where: { userId: user.id },
    orderBy: { order: 'asc' },
  });
  if (!message) {
    return res.render('profile', { user, links, error: 'Message required' });
  }
  await prisma.feedback.create({ data: { userId: user.id, message } });
  res.render('profile', { user, links, success: 'Feedback sent!' });
};
