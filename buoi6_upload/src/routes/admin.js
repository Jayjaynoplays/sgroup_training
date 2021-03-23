var express = require('express');
var router = express.Router();

var adminController = require('../controller/adminController.js');

var { validatePatchOne, validatePostOne, validateGetAll, validateGetOne, validateDeleteOne } = require('../middleware/admin.js');

var { checkAuth } = require('../middleware/authentication');

var { checkAuthorize } = require('../middleware/authorization')


/*------ ROLE --------*/
// create
router.post('/role', validatePostOne, checkAuth, checkAuthorize("CREATE_ROLE"), adminController.createOneRole);

// read
router.get('/role', validatePostOne, checkAuth, checkAuthorize("READ_ROLE"), adminController.getAllRole);

//update
router.patch('/role/:id', validatePatchOne, checkAuth, checkAuthorize("UPDATE_ROLE"), adminController.patchOneRole);

//delete 
router.delete('/role/:id', validatePatchOne, checkAuth, checkAuthorize("DELETE_ROLE"), adminController.deleteOneRole);

/*------------------------------------*/


/*------ PERMISSION --------*/
// create
router.post('/permission', validatePostOne, checkAuth, checkAuthorize("CREATE_PERMISSION"), adminController.createOnePermission);

// read
router.get('/permission', validatePostOne, checkAuth, checkAuthorize("READ_PERMISSION"), adminController.getAllPermission);

//update
router.patch('/permission/:id', validatePatchOne, checkAuth, checkAuthorize("UPDATE_PERMISSION"), adminController.patchOnePermission);

//delete 
router.delete('/permission/:id', validatePatchOne, checkAuth, checkAuthorize("DELETE_PERMISSION"), adminController.deleteOnePermission);
/*------------------------------------*/


/*------ CATEGORIES --------*/
// create
router.post('/category', validatePostOne, checkAuth, checkAuthorize("CREATE_CATEGORY"), adminController.createOneCategory);

// read
router.get('/category', validatePostOne, checkAuth, checkAuthorize("READ_CATEGORY"), adminController.getAllCategory);

//update
router.patch('/category/:id', validatePatchOne, checkAuth, checkAuthorize("UPDATE_CATEGORY"), adminController.patchOneCategory);

//delete 
router.delete('/category/:id', validatePatchOne, checkAuth, checkAuthorize("DELETE_CATEGORY"), adminController.deleteOneCategory);
/*------------------------------------*/


module.exports = router;