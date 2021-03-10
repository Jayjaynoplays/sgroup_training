const knex = require('../knex/connection.js');

var getAuthors2 = async (req, res, next) => {
    const data = await knex('authors2').select();

    return res.json({
        data,
    })
}
module.exports = {
    getAuthors2
}