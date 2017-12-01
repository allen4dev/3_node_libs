const { Router } = require('express');

const artists = require('./artists/router');
const groups = require('./groups/router');
const concerts = require('./concerts/router');
const albums = require('./albums/router');
const songs = require('./songs/router');

const router = Router();

router.use('/artists', artists);
router.use('/groups', groups);
router.use('/concerts', concerts);
router.use('/albums', albums);
router.use('/songs', songs);

module.exports = router;
