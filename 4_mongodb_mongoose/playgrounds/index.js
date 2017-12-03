const mongoose = require('mongoose');

const Song = require('./models/Song');

mongoose.connect('mongodb://localhost/playgrounds');
mongoose.Promise = global.Promise;

// $unwind, $group
// Song.aggregate([
//   { $unwind: '$genres' },
//   { $group: { _id: '$genres', count: { $sum: 1 } } },
// ])
//   .sort({ count: -1 })
//   .then(console.log)
//   .catch(console.error);
