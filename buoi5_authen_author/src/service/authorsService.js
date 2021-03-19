const knex = require('../config/knex/connection.js')


const getOne = (id) => {
    return knex('authors').where({ id: id }).first()
}
module.exports = {
    getOne,
}