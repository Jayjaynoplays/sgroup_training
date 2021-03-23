const { uploadCloudinary } = require('../helper/cloudinaryUpload')

const uploadSingle = async (req, res, next) => {
    try {
        const data = await uploadCloudinary(req.file.path)
        return res.json({
            status: 'upload 1 sucess',
            statusCode: 200,
            data
        })
    } catch (error) {
        console.log(error);
        return res.json({
            status: 'error',
            statusCode: 400,
            error
        })
    }
}
const uploadMany = async (req, res, next) => {
    try {
        const promises = [];
        for (let i = 0; i < req.files.length; i++) {
            promises.push(uploadCloudinary(req.files[i].path));
        }
        const data = await Promise.all(promises);
        return res.json({
            status: 'upload many sucess',
            data
        })
    } catch (error) {
        console.log(error);
        return res.json({
            status: 'error',
            statusCode: 400,
            error
        })
    }
}
module.exports = {
    uploadSingle,
    uploadMany
}