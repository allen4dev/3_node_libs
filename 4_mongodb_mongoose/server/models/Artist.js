const mongoose = require('mongoose');
const { Schema } = mongoose;

const ArtistSchema = new Schema({
  name: {
    type: String,
    trim: true,
    unique: true,
    required: 'A name for the artist is required',
  },
  description: {
    type: String,
    trim: true,
    required: 'A description for the artist is required',
  },
  age: {
    type: Number,
    required: 'Age of artist is required',
  },
  born: {
    type: Date,
    // required: 'Born date of the artist is required',
  },
  nicknames: [
    {
      type: String,
      trim: true,
    },
  ],
  occupations: [
    {
      type: String,
      trim: true,
    },
  ],
  groups: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Group',
    },
  ],
  genres: [
    {
      type: String,
      trim: true,
    },
  ],
  debut: {
    type: Date,
    // required: 'The date of debut is required',
  },
});

const Artist = mongoose.model('Artist', ArtistSchema);

module.exports = Artist;
