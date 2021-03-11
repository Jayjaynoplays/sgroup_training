exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('books_categories').del()
    .then(function () {
      // Inserts seed entries
      return knex('books_categories').insert([
        {
          category_id: 1, book_id: 1
        },
        {
          category_id: 2, book_id: 1
        },
        {
          category_id: 5, book_id: 1
        },
        {
          category_id: 4, book_id: 2
        },
        {
          category_id: 3, book_id: 2
        }
      ]);
    });
};