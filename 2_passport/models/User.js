const mongoose = require('mongoose');

const { Schema } = mongoose;

const UserSchema = new Schema({
  // no validation or hashing by simplicity
  email: { type: String },
  password: String,
  googleID: { type: String },
  twitterID: { type: String },
  facebookID: { type: String },
});

// Refactor: make a method to check all strategies
UserSchema.statics.findOrCreate = function findOrCreate(
  provider,
  id,
  options = {},
) {
  const key = `${provider}ID`;
  return this.findOne({ [key]: id }).then(user => {
    // if (!user) return this.create({ googleID, email: emails[0].value });
    if (!user) return this.create({ [key]: id, ...options });

    return user;
  });
};

const User = mongoose.model('User', UserSchema);

module.exports = User;
