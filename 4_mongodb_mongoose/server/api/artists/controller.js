const mongoose = require('mongoose');

const Artist = mongoose.model('Artist');

exports.saveArtist = async (req, res, next) => {
  console.log('ARTIST_BODY', req.body);
  const artist = new Artist(req.body);

  try {
    const created = await artist.save();
    res.status(200).send({ artist: created });
  } catch (e) {
    next(e);
  }
};
