const mongoose = require('mongoose');

const User = mongoose.model('User');

const passport = require('passport');
const { Strategy: LocalStrategy } = require('passport-local');

const localStrategy = new LocalStrategy({ usernameField: 'email' }, function(
  email,
  password,
  done
) {
  User.findOne({ email })
    .then(user => {
      if (!user) return done(null, false, { message: 'Invalid email' });

      if (password !== user.password)
        return done(null, false, { message: 'Invalid password' });

      return done(null, user);
    })
    .catch(done);
});

const serializeUser = (user, done) => {
  done(null, user._id);
};

const deserializeUser = (id, done) => {
  User.findById(id)
    .then(user => {
      done(null, user);
    })
    .catch(done);
};

module.exports = {
  localStrategy,
  serializeUser,
  deserializeUser,
};
