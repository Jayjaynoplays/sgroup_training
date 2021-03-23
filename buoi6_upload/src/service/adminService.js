const knex = require('../config/knex/connection.js')


const getOne = (table,id) => {
    return knex(table).where({ id: id }).first()
}
module.exports = {
    getOne,
}