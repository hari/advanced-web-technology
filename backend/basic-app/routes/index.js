const express = require('express');
const router = express.Router();

const authRoutes = require('./auth');
const linkRoutes = require('./links');
const feedbackRoutes = require('./feedback');
const profileRoutes = require('./profile');
const publicRoutes = require('./public');

router.get('/', (req, res) => {
  res.render('index', {
    user: req.session?.userId ? req.session.userId : null,
  });
});

router.use('/auth', authRoutes);
router.use('/links', linkRoutes);
router.use('/feedback', feedbackRoutes);
router.use('/profile', profileRoutes);
router.use('/', publicRoutes);

module.exports = router;
