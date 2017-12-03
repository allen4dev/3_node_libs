const mongoose = require('mongoose');

const { Schema } = mongoose;

const SongSchema = new Schema({
  name: String,
  genres: [{ type: String, trim: true, lowercase: true }],
  prices: [Number],
  artist: {
    type: Schema.Types.ObjectId,
    ref: 'Artist',
    required: true,
  },
});

const Song = mongoose.model('Song', SongSchema);

module.exports = Song;
