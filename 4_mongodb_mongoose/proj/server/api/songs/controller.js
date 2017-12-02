const mongoose = require('mongoose');

// const { makeArray } = require('./../../utils');

const Song = mongoose.model('Song');

exports.saveSong = async (req, res, next) => {
  // req.body.albums = makeArray(req.body.albums);

  console.log('SONG_BODY', req.body);

  const song = new Song(req.body);

  try {
    const created = await song.save();
    res.status(200).send({ song: created });
  } catch (e) {
    next(e);
  }
};
