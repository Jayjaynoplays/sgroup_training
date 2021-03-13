const knex = require('../config/knex/connection');


const validatePostOne = (req, res, next) => {
    if (isNaN(req.body.author_id)) return res.json({
        status: 'fail',
        statusCode: 400,
        message: 'author_id is not an integer'
    })
    return next()
}

const validateGetAsAuthorOrTitle = (req, res, next) => {
    if (req.query.q_aId &&isNaN(req.query.q_aId))
        return res.json({
            status: 'fail',
            statusCode: 400,
            message: 'author_id is not integer'
        });
    // if (req.query.limit && isNaN(req.query.limit))
    //     return res.json({
    //         status: 'fail',
    //         statusCode: 400,
    //         message: 'Limit is not integer'
    //     });
    return next();
}

const validateGetAsCategory = (req, res, next) => {
    if (!req.query.q_cat || isNaN(req.query.q_cat)) {
        return res.json({
            status: 'fail',
            statusCode: 400,
            message: 'catagory Id is not provided or not an integer'
        })
    }
    return next()
}

// const validateGetOne = (req, res, next) => {
//     if (!req.params.id || isNaN(req.params.id)) {
//         return res.json({
//             status: 'fail',
//             statusCode: 400,
//             message: "Id is not integer",
//         })
//     }
//     return next()
// }

const validatePatchOne = (req, res, next) => {
    if (isNaN(req.body.author_id)) return res.json({
        status: 'fail',
        statusCode: 400,
        message: 'author_id is not an integer'
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
    validateGetAsAuthorOrTitle,
    validateGetAsCategory,
    // validateGetOne,
    validatePatchOne,
    validateDeleteOne
}