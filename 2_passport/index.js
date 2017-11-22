const http = require('http');

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const session = require('express-session');
const passport = require('passport');

const User = require('./models/User');
const auth = require('./auth');

const app = express();

// Mongoose
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/passport-test');

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => console.log('Connected to mongoose'));

// Middlewares
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(session({ secret: 'secret' }));
app.use(passport.initialize());
app.use(passport.session());

passport.use(auth.localStrategy);
passport.serializeUser(auth.serializeUser);
passport.deserializeUser(auth.deserializeUser);

// helpers
function ensureAuth(req, res, next) {
  if (!req.user) return res.redirect('/signin');
  next();
}

// Router
app.get('/', ensureAuth, (req, res, next) => {
  res.sendFile(`${__dirname}/views/index.html`);
});

app.get('/signin', (req, res, next) => {
  res.sendFile(`${__dirname}/views/signin.html`);
});

app.post(
  '/signin',
  passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/signin',
  })
);

app.get('/signup', (req, res, next) => {
  res.sendFile(`${__dirname}/views/signup.html`);
});

app.post('/signup', (req, res, next) => {
  const { email, password } = req.body;
  const user = new User({ email, password });

  user
    .save()
    .then(created => {
      res.redirect('/signin');
    })
    .catch(next);
});

// Error handler
app.use((err, req, res, next) => {
  console.log(err);
  res.status(500).send({ error: err });
});

const server = http.createServer(app);

server.listen(3000, () => console.log('Server running in port 3000'));
