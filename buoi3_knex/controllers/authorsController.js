const knex = require('../knex/connection.js');

var getAuthors = async (req, res, next) => {
    const data = await knex('authors').select();

    return res.json({
        data,
    })
}
module.exports = {
    getAuthors
}