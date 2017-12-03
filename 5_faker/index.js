const { Db, Server } = require('mongodb');
const faker = require('faker');
const _ = require('lodash');

const db = new Db('faker_test', new Server('localhost', 27017));

let artistsCollection;

const MIN_ARTISTS = 50;
const ARTISTS_TO_ADD = 100;

const GENRES = [
  'JPop',
  'JRock',
  'Classic',
  'Blog Rap',
  'Blog Rock',
  'Cold Wave',
  'Cool Jazz',
  'Digital Punk',
  'Doom Metal',
  'Freak Folk',
  'Garage Rock',
  'Hypnagogic Pop',
  'Noise Pop',
  'Power Electronics',
  'Serialism',
  'Witch House',
];

db
  .open()
  .then(() => {
    // console.log(db.s.databaseName);
    artistsCollection = db.collection('artists');
    return artistsCollection.count();
  })
  .then(count => {
    if (count < MIN_ARTISTS) {
      const artists = _.times(ARTISTS_TO_ADD, createArtist);
      artistsCollection.insertMany(artists);
    }
  })
  .catch(console.error);

function createArtist() {
  return {
    fullname: {
      firstname: faker.name.firstName(),
      lastname: faker.name.lastName(),
    },
    nickname: faker.internet.userName(),
    description: faker.lorem.paragraph(),
    age: faker.random.number({ min: 15, max: 40 }),
    genres: getRandomEntries(GENRES, randomBetween(1, 4)),
    jobs: [faker.name.jobTitle(), faker.name.jobTitle()],
    born: faker.date.past(33),
    debut: faker.date.past(15),
  };
}

function randomBetween(min, max) {
  return ~~(Math.random() * (max - min)) + min;
}

function getRandomEntries(entries, n) {
  const randomEntries = [];

  while (n-- > 0) {
    const entry = entries[~~(Math.random() * entries.length)];
    randomEntries.push(entry);
  }

  return randomEntries;
}
