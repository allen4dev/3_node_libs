const mongoose = require('mongoose');
const express = require('express');
const passport = require('passport');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const flash = require('connect-flash');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/libs-test');
const User = require('./models/User');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser('keyboard cat'));
app.use(session({ secret: 'keyboard cat' }));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

passport.use(User.createStrategy());

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.get('/', (req, res) => {
  res.json({ flash: req.flash() });
});

app.get('/register', (req, res) => {
  res.sendFile(`${__dirname}/views/index.html`);
});

app.post('/register', (req, res, next) => {
  const { email, password } = req.body;
  const user = new User({ email });

  User.register(user, password, (err, user) => {
    if (err) return next(err);
    if (!user) return next(new Error('Not found'));
    req.flash('success', 'User successfully created');
    res.redirect('/');
  });
});

app.use((err, req, res, next) => {
  console.log(err);
  res.status(500).send({ err });
});

module.exports = app;
