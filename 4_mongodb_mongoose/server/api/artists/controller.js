const mongoose = require('mongoose');

const { makeArray } = require('./../../utils');

const Artist = mongoose.model('Artist');

exports.saveArtist = async (req, res, next) => {
  const { occupations, nicknames, groups, genres } = req.body;

  req.body.occupations = makeArray(req.body.occupations);
  req.body.nicknames = makeArray(req.body.nicknames);
  req.body.groups = makeArray(req.body.groups);
  req.body.genres = makeArray(req.body.genres);

  console.log('ARTIST_BODY', req.body);

  const artist = new Artist(req.body);

  try {
    const created = await artist.save();
    res.status(200).send({ artist: created });
  } catch (e) {
    next(e);
  }
};
