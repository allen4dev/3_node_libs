exports.getHome = (req, res, next) => {
  res.render('index');
};

exports.createArtist = (req, res, next) => {
  res.render('createArtist');
};
