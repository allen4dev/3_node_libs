const mongoose = require('mongoose');
const passport = require('passport');

const config = require('./../config');

const User = mongoose.model('User');

const { Strategy: LocalStrategy } = require('passport-local');
const { Strategy: GoogleStrategy } = require('passport-google-oauth20');
const { Strategy: TwitterStrategy } = require('passport-twitter');

const localStrategy = new LocalStrategy({ usernameField: 'email' }, function(
  email,
  password,
  done,
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

const googleStrategy = new GoogleStrategy(
  {
    clientID: config.google.CLIENT_ID,
    clientSecret: config.google.CLIENT_SECRET,
    callbackURL: config.google.CALLBACK_URL,
  },
  (accessToken, refreshToken, profile, done) => {
    // find or create user
    User.findOrCreate(
      profile.provider,
      profile.id,
      //   {
      //   email: profile.emails[0].value,
      // }
    )
      .then(user => done(null, user))
      .catch(done);
  },
);

const twitterStrategy = new TwitterStrategy(
  {
    consumerKey: config.twitter.CONSUMER_KEY,
    consumerSecret: config.twitter.CONSUMER_SECRET,
    callbackURL: config.twitter.CALLBACK_URL,
  },
  (token, tokenSecret, profile, done) => {
    User.findOrCreate(profile.provider, profile.id)
      .then(user => done(null, user))
      .catch(done);
  },
);

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
  googleStrategy,
  twitterStrategy,
  serializeUser,
  deserializeUser,
};
