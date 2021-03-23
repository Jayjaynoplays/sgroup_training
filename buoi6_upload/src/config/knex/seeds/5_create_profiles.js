const faker = require('faker')

exports.seed = function (knex) {
  const profiles = [];
  for (let i = 0; i < 100; i++) {
    var email = faker.internet.email();
    var gender = faker.random.boolean();
    var author_id = i + 1;
    profiles.push(
      {
        email,
        gender,
        author_id
      }
    );
  }
  return knex('profiles').del()
    .then(function () {
      return knex('profiles').insert(profiles);
    });
};