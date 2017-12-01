// Index
exports.getHome = (req, res, next) => {
  res.render('index');
};

// Artists
exports.createArtist = (req, res, next) => {
  res.render('createArtist');
};

// Groups
exports.createGroup = (req, res, next) => {
  res.render('createGroup');
};

// Concerts
exports.createConcert = (req, res, next) => {
  res.render('createConcert');
};

// Albums
exports.createAlbum = (req, res, next) => {
  res.render('createAlbum');
};

// Songs
exports.createSong = (req, res, next) => {
  res.render('createSong');
};
