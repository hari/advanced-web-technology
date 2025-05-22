const express = require('express');
const router = express.Router();
const { ensureAuth } = require('../middlewares/auth');
const feedbackController = require('../controllers/feedback');

router.post('/', ensureAuth, feedbackController.addFeedback);

module.exports = router;
