const faker = require('faker')

exports.seed = function (knex) {
  const profiles = [];
  for (let i = 0; i < 5; i++) {
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
  // return knex('profiles').del()
  //   .then(function () {
  //     return knex('profiles').insert([
  //       {
  //         email: "Maximilian.Bergnaum@gmail.com", gender: 0, author_id: 1
  //       },
  //       {
  //         email: "Quentin.Rosenbaum@yahoo.com", gender: 0, author_id: 2
  //       }
  //     ])
  //   })
};