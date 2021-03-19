var express = require('express');
var router = express.Router();

var profilesController = require('../controller/profilesController.js');

var { validatePatchOne, validatePostOne, validateGetAll, validateGetOne, validateDeleteOne } = require('../middleware/profiles.js');

var { checkAuth } = require('../middleware/authentication');

var { checkAuthorize } = require('../middleware/authorization')

// CRUD

//C: create ->' post
router.post('/profiles', validatePostOne, checkAuth, checkAuthorize("CREATE_PROFILE"), profilesController.createOne)

//R: read -> get all
router.get('/profilesAll', validateGetAll, checkAuth, checkAuthorize("READ_PROFILE"), profilesController.getAll);

//R: read -> get one
router.get('/profiles', validateGetOne, checkAuth, checkAuthorize("READ_AUTHOR"), profilesController.getOne)

//U: update -> patch hoặc là put
router.patch('/profiles/', validatePatchOne, checkAuth, checkAuthorize("UPDATE_AUTHOR"), profilesController.patchOne)

//D: delete -> del
router.delete('/profiles/', validateDeleteOne, checkAuth, checkAuthorize("DELETE_AUTHOR"), profilesController.deleteOne)

module.exports = router;