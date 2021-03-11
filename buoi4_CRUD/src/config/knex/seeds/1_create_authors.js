const faker = require('faker')

exports.seed = function (knex) {
  return knex('authors').del()
    .then(function () {
      var authors = []
      for (let i = 0; i < 5; i++) {
        authors.push(
          {
            first_name: faker.name.firstName(),
            last_name: faker.name.lastName(),
            age: faker.random.number({
              'min': 30,
              'max': 100
            })
          }
        );
      }

      return knex('authors').insert(authors);
    });
};