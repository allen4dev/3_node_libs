const mongoose = require('mongoose');

const Concert = mongoose.model('Concert');

exports.saveConcert = async (req, res, next) => {
  const concert = new Concert(req.body);

  try {
    const created = await concert.save();
    res.status(200).send({ concert: created });
  } catch (e) {
    next(e);
  }
};
