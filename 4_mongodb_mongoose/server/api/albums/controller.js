const mongoose = require('mongoose');

const { makeArray } = require('./../../utils');

const Album = mongoose.model('Album');

exports.saveAlbum = async (req, res, next) => {
  console.log('ALBUM BODY', req.body);
  const album = new Album(req.body);
  try {
    const created = await album.save();
    res.status(200).send({ album: created });
  } catch (e) {
    next(e);
  }
};
