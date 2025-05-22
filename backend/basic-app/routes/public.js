const express = require('express');
const router = express.Router();
const publicController = require('../controllers/public');

router.get('/:username', publicController.showPublicProfile);

module.exports = router;
