
const faker = require('faker')
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      var users = [];
      for (let i = 0; i < 100; i++) {
        var name = faker.name.findName();
        var email = faker.internet.email();
        var password = faker.internet.password();

        users.push({
          name,
          email,
          password
        })
      }
      return knex('users').insert(users);
    });
};
