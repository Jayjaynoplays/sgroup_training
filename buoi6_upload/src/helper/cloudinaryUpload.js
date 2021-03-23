var cloudinary = require('cloudinary').v2;
require('dotenv').config();

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_KEY,
    api_secret: process.env.CLOUDINARY_SECRETE,
})

const uploadCloudinary = (fileName) => {
    return new Promise((resolve, reject) => {
        cloudinary.uploader.upload(fileName, (err, result) => {
            if (err) return reject();
            return resolve(result)
        })
    })
}

module.exports = {
    uploadCloudinary
}