const { Router } = require('express');

const controller = require('./controller');

const router = Router();

router.route('/').post(controller.saveArtist);

module.exports = router;
