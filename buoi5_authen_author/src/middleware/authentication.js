
const knex = require('../config/knex/connection.js');
const jwt = require('jsonwebtoken')
require('dotenv').config();

const checkAuth = async (req, res, next) => {
    try {
        const token = await req.headers.token;
        if (!token) return res.json({
            status: 'fail',
            statusCode: 400,
            message: 'you must login'
        });
        const userId = jwt.verify(token, process.env.JWT_SECRET_KEY)

        const user = await knex('authors')
            .leftJoin("roles", "authors.role_id", "roles.id")
            .leftJoin("roles_permissions", "roles.id", "roles_permissions.role_id")
            .leftJoin("permissions", "permissions.id", "roles_permissions.permission_id")
            .where({ "authors.id": userId.id })
            .select(["authors.id", "first_name", "roles.name as role", "permissions.name as permission"]);
        req.user = user;
        return next();


    } catch (error) {
        console.log(error);
        if (error.message == "jwt expired") return res.json({
            status: 'fail',
            statusCode: 400,
            message: 'JWT expired'
        });
        return res.json({
            status: 'fail',
            statusCode: 400,
            message: 'JWT not correct'
        })
    }

}

module.exports = {
    checkAuth
}