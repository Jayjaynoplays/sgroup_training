var jwt = require('jsonwebtoken');
const knex = require('../config/knex/connection.js');
const bcrypt = require('bcrypt');
const saltRounds = 10;

require('dotenv').config();


const register = async (req, res, next) => {
    try {
        bcrypt.hash(req.body.passwords, saltRounds, async (err, hash) => {
            await knex('authors').insert({
                first_name: req.body.first_name,
                last_name: req.body.last_name,
                age: req.body.age,
                password: hash
            });
        });
        return res.json({
            status: 'success',
            statusCode: 200
        })
    } catch (error) {
        console.log(error.message);
        return res.json({
            status: 'error',
            code: 500,
            message: 'Failed to register author',
        });
    }
};

const login = async (req, res, next) => {
    try {
        const author = await knex('authors').where({ first_name: req.body.first_name }).first();
        if (!author) {
            return res.json({
                status: 'error',
                code: 400,
                message: 'name or passwords is incorrect',
            });
        }
        bcrypt.compare(req.body.password, author.password, function (err, result) {
            if (!result) return res.json({
                status: 'error',
                code: 400,
                message: result,
            });

            // password correct 

            var token = jwt.sign({ id: author.id }, process.env.JWT_SECRET_KEY, { expiresIn: parseInt(process.env.JWT_EXPIRED) });

            return res.json({
                token
            })

        });
    } catch (error) {
        console.log(error.message)
    }
};

module.exports = {
    register,
    login
}