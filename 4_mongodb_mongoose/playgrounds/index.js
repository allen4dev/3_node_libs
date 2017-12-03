const { ObjectID } = require('mongodb');

const mongoose = require('mongoose');
const Song = require('./models/Song');
const Artist = require('./models/Artist');

mongoose.connect('mongodb://localhost/playgrounds');
mongoose.Promise = global.Promise;

// const artist1 = new ObjectID();
// const artist2 = new ObjectID();
// const song1 = new ObjectID();
// const song2 = new ObjectID();
// const song3 = new ObjectID();
// const song4 = new ObjectID();

// Artist.create({
//   _id: artist1,
//   name: { first: 'First', last: 'Last' },
// })
//   .then(console.log)
//   .catch(console.error);

// Artist.create({
//   _id: artist2,
//   name: { first: 'First', last: 'Last' },
// })
//   .then(console.log)
//   .catch(console.error);

// Song.create({
//   _id: song1,
//   name: 'Song name',
//   genres: ['genre1', 'genre2'],
//   prices: [1, 3, 6],
//   artist: artist1,
// })
//   .then(console.log)
//   .catch(console.error);

// Song.create({
//   _id: song2,
//   name: 'Song name',
//   genres: ['genre1', 'genre2'],
//   prices: [1, 5, 6],
//   artist: artist1,
// })
//   .then(console.log)
//   .catch(console.error);

// Song.create({
//   _id: song3,
//   name: 'Song name',
//   genres: ['genre1', 'genre2'],
//   prices: [12, 5, 6],
//   artist: artist1,
// })
//   .then(console.log)
//   .catch(console.error);

// Song.create({
//   _id: song4,
//   name: 'Song name',
//   genres: ['genre1', 'genre2'],
//   prices: [1, 6, 6],
//   artist: artist2,
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

// $lookup
// Artist.aggregate([
//   {
//     $lookup: {
//       from: 'songs',
//       localField: '_id',
//       foreignField: 'artist',
//       as: 'songs',
//     },
//   },
// ])
//   .then(result => console.log(JSON.stringify(result, undefined, 2)))
//   .catch(console.error);

// Artist.findById('5a239010bad31de8b4cebafe')
//   .then(artist => {
//     console.log(artist);
//     console.log(artist.songs);
//   })
//   .catch(console.error);
