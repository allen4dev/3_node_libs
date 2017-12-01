const mongoose = require('mongoose');

const Group = mongoose.model('Group');

exports.saveGroup = async (req, res, next) => {
  const group = new Group(req.body);

  try {
    const created = await group.save();
    res.status(200).send({ group: created });
  } catch (e) {
    next(e);
  }
};
