const mongoose = require('mongoose');

const Song = mongoose.model('Song');

exports.saveSong = async (req, res, next) => {
  const song = new Song(req.body);
  try {
    const created = await song.save();
    res.status(200).send({ song: created });
  } catch (e) {
    next(e);
  }
};
