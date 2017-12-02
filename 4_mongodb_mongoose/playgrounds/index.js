const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/playgrounds');

const Artist = mongoose.model('Artist', { name: String });

const artist = new Artist({ name: 'Some name' });

artist
  .save()
  .then(created => {
    console.log('CREATED', created);
  })
  .catch(err => {
    console.error('ERROR', err);
  });
