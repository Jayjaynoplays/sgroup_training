

exports.seed = function (knex) {
  return knex('categories').del()
    .then(function () {
      return knex('categories').insert([
        {
          name: "Entertainment"
        },
        {
          name: "History"
        },
        {
          name: "Science"
        },
        {
          name: "Math"
        },
        {
          name: "Physic"
        },
        {
          name: "Chemistry"
        }
      ]);
    });
};