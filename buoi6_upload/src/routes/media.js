const express = require('express');
const router = express.Router();
// const path = require ('path')

const mediaController = require('../controller/mediaController');

var { uploadSingle, uploadMany } = require('../helper/imageUpload');




router.post('/upload-one', uploadSingle('image'), mediaController.uploadSingle);
router.post('/upload-many', uploadMany('image',5), mediaController.uploadMany);

module.exports = router;