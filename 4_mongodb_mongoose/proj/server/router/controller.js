const mongoose = require('mongoose');

const Artist = mongoose.model('Artist');
const Group = mongoose.model('Group');
const Album = mongoose.model('Album');
const Song = mongoose.model('Song');

// Index
exports.getHome = async (req, res, next) => {
  try {
    const results = await Song.aggregate([
      {
        $group: {
          _id: '$group',
          count: { $sum: 1 },
        },
      },
    ]);

    console.log('RESULTS', results);

    res.render('index');
  } catch (error) {
    next(error);
  }
};

exports.resultsPage = (req, res, next) => {};

// Artists
exports.createArtist = (req, res, next) => {
  res.render('createArtist');
};

exports.searchArtists = async (req, res, next) => {
  try {
    const artists = await Artist.find({
      $text: { $search: `"${req.query.q}"` },
      // $text: { $search: `${req.query.q}` },
    });
    res.render('results', { results: artists });
  } catch (e) {
    next(e);
  }
};
// Groups
exports.createGroup = async (req, res, next) => {
  try {
    const artists = await Artist.find({});
    res.render('createGroup', { members: artists });
  } catch (e) {
    next(e);
  }
};

// Concerts
exports.createConcert = async (req, res, next) => {
  try {
    const groups = await Group.find({});
    res.render('createConcert', { groups });
  } catch (e) {
    next(e);
  }
};

// Albums
exports.createAlbum = async (req, res, next) => {
  try {
    const groups = await Group.find({});
    res.render('createAlbum', { groups });
  } catch (e) {
    next(e);
  }
};

// Songs
exports.createSong = async (req, res, next) => {
  try {
    const albumsPromise = Album.find({});
    const groupsPromise = Group.find({});

    const [albums, groups] = await Promise.all([albumsPromise, groupsPromise]);

    res.render('createSong', { albums, groups });
  } catch (e) {
    next(e);
  }
};
