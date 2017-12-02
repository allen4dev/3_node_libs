const mongoose = require('mongoose');

const Artist = mongoose.model('Artist');
const Group = mongoose.model('Group');
const Album = mongoose.model('Album');

// Index
exports.getHome = (req, res, next) => {
  res.render('index');
};

// Artists
exports.createArtist = (req, res, next) => {
  res.render('createArtist');
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
