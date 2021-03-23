const knex = require('../config/knex/connection.js')

const getOne = (req) => {
    let q_authorId = req.query.q_aId || "";
    return knex('profiles')
        .where({ author_id: q_authorId })
        .first();
}
module.exports = {
    getOne,
}