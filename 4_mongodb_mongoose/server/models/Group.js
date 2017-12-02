const mongoose = require('mongoose');
const { Schema } = mongoose;

const GroupSchema = new Schema({
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
  members: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Artist',
      // required: 'Member(s) of the group are required',
    },
  ],
  // songs: [
  //   {
  //     type: Schema.Types.ObjectId,
  //     ref: 'Song',
  //   },
  // ],
  // concerts: [
  //   {
  //     type: Schema.Types.ObjectId,
  //     ref: 'Concert',
  //   },
  // ],
  debut: {
    type: Date,
    // required: 'Debut of the Group is required',
  },
});

const Group = mongoose.model('Group', GroupSchema);

module.exports = Group;
