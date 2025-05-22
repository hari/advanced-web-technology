const bcrypt = require('bcryptjs');
const prisma = require('../lib/db');

exports.getLogin = (req, res) => {
  if (req.session.userId) {
    return res.redirect('/');
  }
  res.render('login', { error: null });
};

exports.postLogin = async (req, res) => {
  const { identifier, password } = req.body;

  const user = await prisma.user.findFirst({
    where: {
      OR: [{ username: identifier }, { email: identifier }],
    },
  });

  if (!user || !(await bcrypt.compare(password, user.password))) {
    return res.render('login', { error: 'Invalid credentials' });
  }

  req.session.userId = user.id;
  res.redirect('/');
};

exports.getRegister = (req, res) => {
  res.render('register', { error: null });
};

exports.postRegister = async (req, res) => {
  const { name, email, username, password } = req.body;
  if (!name || !email || !username || !password) {
    return res.render('register', { error: 'All fields required' });
  }

  const sanitizedUsername = username.toLowerCase().trim();
  const isInvalidUsername =
    sanitizedUsername.length < 3 || sanitizedUsername.length > 20;

  if (isInvalidUsername) {
    return res.render('register', {
      error: 'Username must be between 3 and 20 characters',
    });
  }

  // Make sure username is alphanumeric
  if (!/^[a-zA-Z0-9]+$/.test(sanitizedUsername)) {
    return res.render('register', { error: 'Username must be alphanumeric' });
  }

  if (!email.includes('@')) {
    return res.render('register', { error: 'Invalid email address' });
  }

  const existing = await prisma.user.findFirst({
    where: { OR: [{ username: sanitizedUsername }, { email: email }] },
  });
  if (existing) {
    return res.render('register', { error: 'Username or email already taken' });
  }

  const hash = await bcrypt.hash(password, 10);
  await prisma.user.create({
    data: { name, email, username: sanitizedUsername, password: hash },
  });
  res.redirect('/auth/login');
};

exports.logout = (req, res) => {
  req.session.destroy(() => {
    res.redirect('/');
  });
};

exports.getCurrentUser = async (req) => {
  if (!req.session?.userId) return null;
  return await prisma.user.findUnique({ where: { id: req.session.userId } });
};
