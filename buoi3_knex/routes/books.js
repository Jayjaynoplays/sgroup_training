var express = require('express');
var router = express.Router();

const authorsController2 = require('../controllers/booksController');
/* GET users listing. */

router.get('/authors2', authorsController2.getAuthors2)

module.exports = router;
