
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('books').del()
    .then(function () {
      // Inserts seed entries
      return knex('books').insert([
        {
          title: "Dynamic Mobility Strategist", description: "maiores nihil dignissimos libero cumque deserunt ipsum ut quae totam", author_id: 1, return_date: "2021-05-12 12:39:31"
        },
        {
          title: "Dynamic Integration Planner", description: "omnis aut doloremque hic quis debitis officiis sit iste facere", author_id: 2, return_date: "2021-06-02 11:39:56"
        },
        {
          title: "loz loz loz", description: "maiores nihil dignissimos libero cumque deserunt ipsum ut quae totam", author_id: 1, return_date: "2021-05-12 12:39:31"
        },
        {
          title: "perry bitch!!!", description: "omnis aut doloremque hic quis debitis officiis sit iste facere", author_id: 3, return_date: "2021-06-02 11:39:56"
        },
        {
          title: "i'm god bitch", description: "maiores nihil dignissimos libero cumque deserunt ipsum ut quae totam", author_id: 2, return_date: "2021-05-12 12:39:31"
        },
        {
          title: "world genius duchuy", description: "omnis aut doloremque hic quis debitis officiis sit iste facere", author_id: 5, return_date: "2021-06-02 11:39:56"
        },
      ]);
    });
};