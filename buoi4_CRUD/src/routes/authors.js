var express = require('express');
var router = express.Router();
var authorsController = require('../controller/authorsController.js')

var { validateGetAll, validateGetOne, validatePostOne, validatePatchOne, validateDeleteOne } = require('../middleware/authors.js')

// CRUD

//C: create ->' post
router.post('/authors', validatePostOne, authorsController.createOne)

//R: read -> get all
router.get('/authors', validateGetAll, authorsController.getAll);

//R: read -> get one
router.get('/authors/:id', validateGetOne, authorsController.getOne)

//U: update -> patch hoặc là put
router.patch('/authors/:id', validatePatchOne, authorsController.patchOne)

//D: delete -> del
router.delete('/authors/:id', validateDeleteOne, authorsController.deleteOne)

module.exports = router;
