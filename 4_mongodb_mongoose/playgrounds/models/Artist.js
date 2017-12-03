const mongoose = require('mongoose');

const { Schema } = mongoose;

const ArtistSchema = new Schema(
  {
    name: {
      first: { type: String },
      last: { type: String },
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

ArtistSchema.virtual('songs', {
  ref: 'Song',
  localField: '_id',
  foreignField: 'artist',
});

const Artist = mongoose.model('Artist', ArtistSchema);

module.exports = Artist;
