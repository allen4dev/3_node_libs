const http = require('http');
const express = require('express');
const multer = require('multer');
const uuid = require('uuid');
const jimp = require('jimp');
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

// DiskStorage
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

// MemoryStorage
function fileFilter(req, file, next) {
  if (!isPhoto(file))
    return next({ message: "That filetype isn't allowed!" }, false);

  next(null, true);
}

// const upload = multer({ storage: multer.memoryStorage(), fileFilter });

// Resize
function resize(req, res, next) {
  if (!req.file) return next(new Error('No file passed'));

  jimp
    .read(req.file.buffer)
    .then(photo => {
      return photo.resize(400, jimp.AUTO);
    })
    .then(resized => {
      return resized.write(`${pathToUpload}/${createFilename(req.file)}`);
    })
    .then(() => next())
    .catch(next);
}

app.get('/', (req, res, next) => {
  res.sendFile(`${__dirname}/views/index.html`);
});

app.post('/uploadImage', upload.single('image'), (req, res, next) => {
  console.log(req.file);
  res.redirect('/');
});

app.get('/multi', (req, res, next) => {
  res.sendFile(`${__dirname}/views/multi.html`);
});

app.post(
  '/uploadMulti',
  upload.fields([{ name: 'avatar' }, { name: 'banner' }]),
  (req, res, next) => {
    console.log(req.files);
    res.redirect('/');
  }
);

app.use((err, req, res, next) => {
  console.log(err);
  res.status(500).send({ error: err });
});

const server = http.createServer(app);

server.listen(3000, console.log('Server running in port 3000'));
