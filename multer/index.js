const http = require('http');
const express = require('express');
const multer = require('multer');
const uuid = require('uuid');
const ext = require('file-extension');

const app = express();

const pathToUpload = `${__dirname}/public/uploads`;

function isPhoto(file) {
  return file.mimetype.startsWith('image/');
}

function createFilename(file) {
  const extension = ext(file.originalname);
  return `${uuid()}.${extension}`;
}

const diskStorage = multer.diskStorage({
  destination: function(req, file, next) {
    if (!isPhoto(file))
      return next({ message: "That filetype isn't allowed!" }, false);

    next(null, pathToUpload);
  },
  filename: function(req, file, next) {
    next(null, createFilename(file));
  },
});

const upload = multer({ storage: diskStorage });

app.get('/', (req, res, next) => {
  res.sendFile(`${__dirname}/views/index.html`);
});

app.post('/uploadImage', upload.single('image'), (req, res, next) => {
  console.log(req.file);
  res.redirect('/');
});

app.use((err, req, res, next) => {
  console.log(err);
  res.status(500).send({ error: err });
});

const server = http.createServer(app);

server.listen(3000, console.log('Server running in port 3000'));
