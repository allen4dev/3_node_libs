const mongoose = require('mongoose');

const Song = require('./models/Song');
const Artist = require('./models/Artist');

mongoose.connect('mongodb://localhost/playgrounds');
mongoose.Promise = global.Promise;

// Song.create({
//   name: 'Song name5',
//   genres: ['genre1', 'genre2'],
//   prices: [1, 3, 6],
// })
//   .then(console.log)
//   .catch(console.error);

// Artist.create({
//   name: { first: 'Firstname', last: 'Lastnames' },
// })
//   .then(console.log)
//   .catch(console.error);

// $unwind, $group
// Song.aggregate([
//   { $unwind: '$genres' },
//   { $group: { _id: '$genres', count: { $sum: 1 } } },
// ])
//   .sort({ count: -1 })
//   .then(console.log)
//   .catch(console.error);

// $sortByCount
// Song.aggregate([{ $unwind: '$genres' }, { $sortByCount: '$genres' }])
//   .then(console.log)
//   .catch(console.error);

// $project
// Song.aggregate([{ $project: { _id: 0, name: 1 } }])
//   .then(console.log)
//   .catch(console.error);

// Artist.aggregate([{ $project: { name: { first: 1 } } }])
//   .then(console.log)
//   .catch(console.error);

// $sample
// Song.aggregate([
//   {
//     $sample: {
//       size: 3,
//     },
//   },
// ])
//   .then(console.log)
//   .catch(console.error);

// $addFields
// Song.aggregate([
//   {
//     $addFields: {
//       totalPrice: { $sum: '$prices' },
//     },
//   },
// ])
//   .then(console.log)
//   .catch(console.error);
