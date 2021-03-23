const multer = require('multer');
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './src/upload');
    },
    filename: function (req, file, cb) {
        // cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
        cb(null, file.fieldname + '-' + Date.now() + file.originalname.slice(file.originalname.lastIndexOf('.'), file.originalname.length));
    }
});

const upload = multer({
    storage,
    fileFilter: (req, file, cb) => {
        const allowedFileType = ['.jpg', '.jpeg', '.png'];
        if (!allowedFileType.includes(file.originalname.slice(file.originalname.lastIndexOf('.'), file.originalname.length))) return cb(new Error('FILE MUST BE IMAGE'));
        return cb(null, true);
    }
});

const uploadSingle = (keyName) => {
    return (req, res, next) => {
        upload.single(keyName)(req, res, (err) => {
            if (err) return next(err);
            return next();
        })
    }
}

const uploadMany = (keyName, maxCount) => {
    return (req, res, next) => {
        upload.array(keyName, maxCount)(req, res, (err) => {
            if (err) return next(err);
            return next();
        })
    }
}

module.exports = {
    uploadSingle,
    uploadMany
}

