var express = require('express');
var router = express.Router();

const authorsController = require('../controllers/authorsController');
/* GET users listing. */

router.get('/', authorsController.getAuthors)

module.exports = router;
