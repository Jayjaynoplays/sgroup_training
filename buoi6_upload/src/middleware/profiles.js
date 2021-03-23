

const validatePostOne = (req, res, next) => {
    if (isNaN(req.body.gender || req.body.author_id)) return res.json({
        status: 'fail',
        statusCode: 400,
        message: 'gender or author_id is not an integer'
    })
    if (!/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(req.body.email.toLowerCase())) {
        return res.json({
            status: "fail",
            statusCode: 400,
            message: "Email format is incorrect"
        })
    }
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
    if (!req.query.q_aId) {
        return res.json({
            status: 'fail',
            statusCode: 400,
            message: "authorId is not provided for query",
        })
    } else if (isNaN(req.query.q_aId)) {
        return res.json({
            status: 'fail',
            statusCode: 400,
            message: "author id is not integer",
        })
    }
    return next()
}
const validatePatchOne = (req, res, next) => {
    if (!/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(req.body.email.toLowerCase())) {
        return res.json({
            status: "fail",
            statusCode: 400,
            message: "Email format is incorrect"
        })
    }
    if (!req.query.q_aId) {
        return res.json({
            status: 'fail',
            statusCode: 400,
            message: "authorId is not provided for query",
        })
    } else if (isNaN(req.query.q_aId)) {
        return res.json({
            status: 'fail',
            statusCode: 400,
            message: "author id is not integer",
        })
    }
    return next()
}
const validateDeleteOne = (req, res, next) => {
    if (!req.query.q_aId) {
        return res.json({
            status: 'fail',
            statusCode: 400,
            message: "authorId is not provided for delete",
        })
    } else if (isNaN(req.query.q_aId)) {
        return res.json({
            status: 'fail',
            statusCode: 400,
            message: "author id is not integer",
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