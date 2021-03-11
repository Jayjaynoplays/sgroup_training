var express = require('express');
var router = express.Router();
var authorsController = require('../controller/authorsController.js')

// CRUD

//C: create ->' post
router.post('/authors', authorsController.createOne)

//R: read -> get all
router.get('/authors', authorsController.getAll);

//R: read -> get one
router.get('/authors/:id', authorsController.getOne)

//U: update -> patch hoặc là put
router.patch('/authors/:id', authorsController.patchOne)

//D: delete -> del
router.delete('/authors/:id', authorsController.deleteOne)

module.exports = router;
