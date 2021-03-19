

const validatePostOne = (req, res, next) => {
    if (!req.body.name) {
        return res.json({
            status: 'fail',
            statusCode: 400,
            message: 'role not found in request'
        })
    }
    return next();
}

const validatePatchOne = async (req, res, next) => {
    if (isNaN(req.params.id)) return res.json({
        status: 'fail',
        statusCode: 400,
        message: 'id is not integer'
    })
    return next()
}
module.exports = {
    validatePostOne,
    validatePatchOne

}