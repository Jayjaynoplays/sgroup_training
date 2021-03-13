var express = require('express');
var router = express.Router();

var profilesController = require('../controller/profilesController.js');

var { validatePatchOne, validatePostOne, validateGetAll, validateGetOne, validateDeleteOne } = require('../middleware/profiles.js');

// CRUD

//C: create ->' post
router.post('/profiles', validatePostOne, profilesController.createOne)

//R: read -> get all
router.get('/profilesAll', validateGetAll, profilesController.getAll);

//R: read -> get one
router.get('/profiles', validateGetOne, profilesController.getOne)

//U: update -> patch hoặc là put
router.patch('/profiles/', validatePatchOne, profilesController.patchOne)

//D: delete -> del
router.delete('/profiles/', validateDeleteOne, profilesController.deleteOne)

module.exports = router;