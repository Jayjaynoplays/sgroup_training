const faker = require('faker');
const bcrypt = require('bcrypt');

exports.seed = async (knex) => {
  var authors = [];
  const password = await bcrypt.hash("123456", 10);
  authors.push({ first_name: "admin", last_name: "admin", age: 30, password, role_id: 1 });
  authors.push({ first_name: "user", last_name: "user", age: 20, password, role_id: 2 });

  for (let i = 0; i < 98; i++) {
    authors.push(
      {
        first_name: faker.name.firstName(),
        last_name: faker.name.lastName(),
        password,
        age: faker.random.number({
          'min': 30,
          'max': 100
        }),
        role_id: 2
      }
    );
  }
  return knex('authors').del()
    .then(function () {
      return knex('authors').insert(authors);
    });

};