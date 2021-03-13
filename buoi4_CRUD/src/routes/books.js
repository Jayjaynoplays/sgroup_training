var express = require('express');
var router = express.Router();
var booksController = require('../controller/booksController.js')

var { validatePostOne,
    validateGetAsAuthorOrTitle,
    validateGetAsCategory,
    validatePatchOne,
    validateDeleteOne } = require('../middleware/books.js')

// CRUD

// C: create ->' post
router.post('/books', validatePostOne, booksController.createOne)

//R: read -> get all
router.get('/booksAll', booksController.getAll);

//R: read -> get all
router.get('/books', validateGetAsAuthorOrTitle, booksController.getAsAuthorOrTitle);

//R: read -> get all
router.get('/books', validateGetAsCategory, booksController.getAsCategory);


// U: update -> patch hoặc là put
router.patch('/books/:id', validatePatchOne, booksController.patchOne)

// D: delete -> del
router.delete('/books/:id', validateDeleteOne, booksController.deleteOne)

module.exports = router;
