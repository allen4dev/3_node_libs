const mongoose = require('mongoose');

const { Schema } = mongoose;

const UserSchema = new Schema({
  // no validation or hashing by simplicity
  email: { type: String, unique: true },
  password: String,
  googleID: String,
});

// Refactor: make a method to check all strategies
UserSchema.statics.findOrCreate = function findOrCreate(profile) {
  const { id: googleID, emails } = profile;
  return this.findOne({ googleID }).then(user => {
    if (!user) return this.create({ googleID, email: emails[0].value });

    return user;
  });
};

const User = mongoose.model('User', UserSchema);

module.exports = User;
