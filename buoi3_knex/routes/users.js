var express = require('express');
var router = express.Router();

var userController = require ('../controller/usersController')

/* GET users listing. */
router.get('/', userController.getUser);

module.exports = router;
