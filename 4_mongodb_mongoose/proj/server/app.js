require('./models/Album');
require('./models/Artist');
require('./models/Concert');
require('./models/Song');
require('./models/Group');

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const api = require('./api');
const router = require('./router');

const helpers = require('./helpers');

const app = express();

mongoose.connect('mongodb://localhost/mongoose-test');

app.set('views', `${__dirname}/views`);
app.set('view engine', 'pug');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use((req, res, next) => {
  res.locals.h = helpers;
  next();
});

app.use('/', router);
app.use('/api', api);

app.use((err, req, res, next) => {
  console.error('ERROR', err);
  res.status(500).send({ err });
});

module.exports = app;
