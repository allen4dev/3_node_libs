const mongoose = require('mongoose');
const { Schema } = mongoose;

const SongSchema = new Schema({
  name: {
    type: String,
    trim: true,
    required: 'The name of the Song is required',
  },
  release: {
    type: Date,
    // required: 'Date of the release is required',
  },

  album: {
    type: Schema.Types.ObjectId,
    ref: 'Album',
  },

  group: {
    type: Schema.Types.ObjectId,
    ref: 'Group',
    // required: 'Group who made the Song is required',
  },
});

const Song = mongoose.model('Song', SongSchema);

module.exports = Song;
