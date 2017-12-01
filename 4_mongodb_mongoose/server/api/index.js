const { Router } = require('express');

const artists = require('./artists/router');

const router = Router();

router.use('/artists', artists);

module.exports = router;
