const mongoose = require('mongoose');
const { makeArray } = require('./../../utils');

const Group = mongoose.model('Group');

exports.saveGroup = async (req, res, next) => {
  req.body.members = makeArray(req.body.members);
  req.body.songs = makeArray(req.body.songs);
  req.body.concerts = makeArray(req.body.concerts);

  console.log('GROUP_BODY', req.body);

  const group = new Group(req.body);

  try {
    const created = await group.save();
    res.status(200).send({ group: created });
  } catch (e) {
    next(e);
  }
};
