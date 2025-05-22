const express = require('express');
const router = express.Router();
const { ensureAuth } = require('../middlewares/auth');
const profileController = require('../controllers/profile');

router.get('/', ensureAuth, profileController.showProfile);
router.put('/', ensureAuth, profileController.updateProfile);

module.exports = router;
