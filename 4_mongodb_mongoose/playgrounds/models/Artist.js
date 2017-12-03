const mongoose = require('mongoose');

const { Schema } = mongoose;

const ArtistSchema = new Schema({
  name: {
    first: { type: String },
    last: { type: String },
  },
});

const Artist = mongoose.model('Artist', ArtistSchema);

module.exports = Artist;
