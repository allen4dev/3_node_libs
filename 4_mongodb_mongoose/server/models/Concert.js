const mongoose = require('mongoose');
const { Schema } = mongoose;

const ConcertSchema = new Schema({
  name: {
    type: String,
    trim: true,
    required: 'The name of the Group is required',
  },
  description: {
    type: String,
    trim: true,
    required: 'Description of the group is required',
  },
  group: {
    type: Schema.Types.ObjectId,
    ref: 'Group',
    // required: 'Group who perform the Concert is required',
  },
});

const Concert = mongoose.model('Concert', ConcertSchema);

module.exports = Concert;
