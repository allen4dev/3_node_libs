const http = require('http');

const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

// Mongoose
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/passport-test');

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => console.log('Connected to mongoose'));

const User = require('./models/User');

// Middlewares
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Router
app.get('/', (req, res, next) => {
  res.sendFile(`${__dirname}/views/index.html`);
});

app.get('/signin', (req, res, next) => {
  res.sendFile(`${__dirname}/views/signin.html`);
});

app.post('/signin', (req, res, next) => {});

app.get('/signup', (req, res, next) => {
  res.sendFile(`${__dirname}/views/signup.html`);
});

app.post('/signup', (req, res, next) => {
  const { email, password } = req.body;
  const user = new User({ email, password });

  user
    .save()
    .then(created => {
      res.redirect('/');
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
