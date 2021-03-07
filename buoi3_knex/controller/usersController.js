const knex = require('../knex/connection');

const getUser = async function (req, res, next) {
    const users = await knex('users').select('*');
    console.log(users);
    return res.json({
        users,
    })
};

module.exports = {
    getUser,
}