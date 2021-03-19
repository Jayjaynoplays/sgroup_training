const knex = require('../config/knex/connection');


const validatePostOne = (req, res, next) => {
    if (isNaN(req.body.age)) return res.json({
        status: 'fail',
        statusCode: 400,
        message: 'age is not integer'
    })
    return next()
}

const validateGetAll = (req, res, next) => {
    if (req.query.page && isNaN(req.query.page))
        return res.json({
            status: 'fail',
            statusCode: 400,
            message: 'Page is not integer'
        });
    if (req.query.limit && isNaN(req.query.limit))
        return res.json({
            status: 'fail',
            statusCode: 400,
            message: 'Limit is not integer'
        });
    return next();
}

const validateGetOne = (req, res, next) => {
    if (!req.params.id || isNaN(req.params.id)) {
        return res.json({
            status: 'fail',
            statusCode: 400,
            message: "Id is not integer",
        })
    }
    return next()
}

const validatePatchOne = (req, res, next) => {
    if (isNaN(req.body.age)) return res.json({
        status: 'fail',
        statusCode: 400,
        message: 'age is not integer'
    })
    return next()
}

const validateDeleteOne = async (req, res, next) => {
    if (!req.params.id || isNaN(req.params.id)) {
        return res.json({
            status: 'fail',
            statusCode: 400,
            message: "Id is not integer",
        })
    }
    return next()
}

module.exports = {
    validatePostOne,
    validateGetAll,
    validateGetOne,
    validatePatchOne,
    validateDeleteOne
}