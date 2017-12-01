const { Router } = require('express');

const controller = require('./controller');

const router = Router();

// Index
router.get('/', controller.getHome);

// Artists
router.get('/artists/create', controller.createArtist);

// Groups
router.get('/groups/create', controller.createGroup);

// Concerts
router.get('/concerts/create', controller.createConcert);

// Albums
router.get('/albums/create', controller.createAlbum);

// Songs
router.get('/songs/create', controller.createSong);

module.exports = router;
