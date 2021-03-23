var express = require('express');
var router = express.Router();
var booksController = require('../controller/booksController.js')

var { validatePostOne,
    validateGetAsAuthorOrTitle,
    validateGetAsCategory,
    validatePatchOne,
    validateDeleteOne } = require('../middleware/books.js')

var { checkAuth } = require('../middleware/authentication');

var { checkAuthorize } = require('../middleware/authorization')
// CRUD

// C: create ->' post
router.post('/books', validatePostOne, checkAuth, checkAuthorize("CREATE_BOOK"), booksController.createOne)

//R: read -> get all
router.get('/booksAll', checkAuth, checkAuthorize("READ_BOOK"), booksController.getAll);

//R: read -> get all
router.get('/books', validateGetAsAuthorOrTitle, checkAuth, checkAuthorize("READ_BOOK"), booksController.getAsAuthorOrTitle);

//R: read -> get all
router.get('/books', validateGetAsCategory, checkAuth, checkAuthorize("READ_BOOK"), booksController.getAsCategory);


// U: update -> patch hoặc là put
router.patch('/books/:id', validatePatchOne, checkAuth, checkAuthorize("UPDATE_BOOK"), booksController.patchOne)

// D: delete -> del
router.delete('/books/:id', validateDeleteOne, checkAuth, checkAuthorize("DELETE_BOOK"), booksController.deleteOne)

module.exports = router;
