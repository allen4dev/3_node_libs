const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.json({ test: process.env.TEST });
});

module.exports = app;
