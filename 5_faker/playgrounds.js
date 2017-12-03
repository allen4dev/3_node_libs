const faker = require('faker');

const artist = {
  fullname: {
    firstname: faker.name.firstName(),
    lastname: faker.name.lastName(),
  },
  nickname: faker.internet.userName(),
  description: faker.lorem.text(),
  age: faker.random.number({ min: 15, max: 40 }),
  jobs: [faker.name.jobTitle(), faker.name.jobTitle()],
  born: faker.date.past(33),
  debut: faker.date.past(15),
};

console.log(artist);
