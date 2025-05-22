const express = require('express');
const router = express.Router();
const { ensureAuth } = require('../middlewares/auth');
const linkController = require('../controllers/link');

router.get('/', ensureAuth, linkController.listLinks);
router.post('/', ensureAuth, linkController.addLink);
router.get('/:id/edit', ensureAuth, linkController.editLinkForm);
router.put('/:id', ensureAuth, linkController.updateLink);
router.delete('/:id', ensureAuth, linkController.deleteLink);

module.exports = router;
