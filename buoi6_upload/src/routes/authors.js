var express = require('express');
var router = express.Router();

var authorsController = require('../controller/authorsController.js')

var { validateGetAll, validateGetOne, validatePostOne, validatePatchOne, validateDeleteOne } = require('../middleware/authors.js')

var { checkAuth } = require('../middleware/authentication');

var { checkAuthorize } = require('../middleware/authorization')

// CRUD

//C: create ->' post
router.post('/authors', validatePostOne, checkAuth, checkAuthorize("CREATE_AUTHOR"), authorsController.createOne)

//R: read -> get all
router.get('/authorsAll', validateGetAll, checkAuth, checkAuthorize("READ_AUTHOR"), authorsController.getAll);

//R: read -> get one
router.get('/authors/:id', validateGetOne, checkAuth, checkAuthorize("READ_AUTHOR"), authorsController.getOne)

//U: update -> patch hoặc là put
router.patch('/authors/:id', validatePatchOne, checkAuth, checkAuthorize("UPDATE_AUTHOR"), authorsController.patchOne)

//D: delete -> del
router.delete('/authors/:id', validateDeleteOne, checkAuth, checkAuthorize("DELETE_AUTHOR"), authorsController.deleteOne)

module.exports = router;
