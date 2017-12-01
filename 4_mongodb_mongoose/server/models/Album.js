const mongoose = require('mongoose');
const { Schema } = mongoose;

const AlbumSchema = new Schema({
  name: {
    type: String,
    trim: true,
    required: 'The name of the Album is required',
  },
  release: {
    type: Date,
    required: 'Date of the release is required',
  },
  group: {
    type: Schema.Types.ObjectId,
    ref: 'Group',
    required: 'Group who made the Album is required',
  },
});

// Virtual type to get all songs for the album

const Album = mongoose.model('Album', AlbumSchema);

module.exports = Album;
