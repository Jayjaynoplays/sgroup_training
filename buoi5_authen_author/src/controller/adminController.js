const knex = require('../config/knex/connection.js');
const adminService = require('../service/adminService')

/*------ ROLE --------*/
const createOneRole = async (req, res, next) => {
    try {
        const role = await knex('roles').insert({
            name: req.body.name,
        });
        return res.json({
            status: 'success',
            role
        });
    } catch (error) {
        console.log(error);
        return res.json({
            status: 'error',
            code: 500,
            message: 'Failed to insert role',
        })
    }
};

const getAllRole = async (req, res, next) => {
    try {
        const data = await knex('roles').select();
        return res.json({
            status: "success",
            data,
        });
    } catch (error) {
        console.log(error);
        return res.json({
            status: 'error',
            code: 500,
            message: 'Failed to get role',
        })
    }
};

const patchOneRole = async (req, res, next) => {
    try {
        const role = await adminService.getOne('roles', req.params.id);
        if (!role) return res.json({
            status: 'fail',
            statusCode: 400,
            message: 'role does not exist'
        });
        await knex('roles').where({ id: req.params.id }).update({
            name: req.body.name,
        });
        return res.json({
            status: 'success'
        });
    } catch (error) {
        return res.json({
            status: 'error',
            code: 500,
            message: 'update fail',
            error: error.message
        });
    }
};

const deleteOneRole = async (req, res, next) => {
    try {
        const role = await adminService.getOne('roles', req.params.id);
        if (!role) return res.json({
            status: 'fail',
            statusCode: 400,
            message: 'role does not exist'
        });

        await knex('roles').where({ id: req.params.id }).del();
        return res.json({
            status: 'delete success'
        });

    } catch (error) {
        console.log(error);
        return res.json({
            status: 'error',
            code: 500,
            message: 'Failed to delete role',
        })
    }
};


/*------ PERMISSION --------*/
const createOnePermission = async (req, res, next) => {
    try {
        const permission = await knex('permissions').insert({
            name: req.body.name.toUpperCase()
        });
        return res.json({
            status: 'success',
            permission
        });
    } catch (error) {
        console.log(error);
        return res.json({
            status: 'error',
            code: 500,
            message: 'Failed to insert permission',
        })
    }
}

const getAllPermission = async (req, res, next) => {
    try {
        const data = await knex('permissions').select();
        return res.json({
            status: "success",
            data
        })
    } catch (error) {
        console.log(error);
        return res.json({
            status: 'error',
            code: 500,
            message: 'Failed to get permissions',
        })
    }
}

const patchOnePermission = async (req, res, next) => {
    try {
        const permission = await adminService.getOne('permissions', req.params.id);
        if (!permission) return res.json({
            status: 'fail',
            statusCode: 400,
            message: 'permission does not exist'
        });
        await knex('permissions').where({ id: req.params.id }).update({
            name: req.body.name.toUpperCase()
        });
        return res.json({
            status: 'success'
        });
    } catch (error) {
        console.log(error);
        return res.json({
            status: 'error',
            code: 500,
            message: 'Failed to update permission',
        })
    }
}

const deleteOnePermission = async (req, res, next) => {
    try {
        const permission = await adminService.getOne('permissions', req.params.id);
        if (!permission) return res.json({
            status: 'fail',
            statusCode: 400,
            message: 'permission does not exist'
        });
        await knex('permissions').where({ id: req.params.id }).del();
        return res.json({
            status: 'success'
        });
    } catch (error) {
        console.log(error);
        return res.json({
            status: 'error',
            code: 500,
            message: 'Failed to update permission',
        })
    }
}

/*------ CATEGORY --------*/
const createOneCategory = async (req, res, next) => {
    try {
        const category = await knex('categories').insert({
            name: req.body.name
        });
        return res.json({
            status: 'success',
            category
        });
    } catch (error) {
        console.log(error);
        return res.json({
            status: 'error',
            code: 500,
            message: 'Failed to insert category',
        });
    }
}

const getAllCategory = async (req, res, next) => {
    try {
        const data = await knex('categories').select().orderBy('id', 'asc');
        return res.json({
            status: "success",
            data
        });

    } catch (error) {
        console.log(error);
        return res.json({
            status: 'error',
            code: 500,
            message: 'Failed to get categories',
        });
    }
}

const patchOneCategory = async (req, res, next) => {
    try {
        const category = await adminService.getOne('categories', req.params.id);
        if (!category) return res.json({
            status: 'fail',
            statusCode: 400,
            message: 'category does not exist'
        })
        await knex('categories').where({ id: req.params.id }).update({
            name: req.body.name
        });
        return res.json({
            status: 'success',
        })
    } catch (error) {
        console.log(error);
        return res.json({
            status: 'error',
            code: 500,
            message: 'Failed to update category',
        });
    }
}

const deleteOneCategory = async (req, res, next) => {
    try {
        const category = await adminService.getOne('categories', req.params.id);
        if (!category) return res.json({
            status: 'fail',
            statusCode: 400,
            message: 'category does not exist'
        });
        await knex('categories').where({ id: req.params.id }).del();
        return res.json({
            status: 'success',
        })
    } catch (error) {
        console.log(error);
        return res.json({
            status: 'error',
            code: 500,
            message: 'Failed to delete category',
        });
    }
}


module.exports = {
    createOneRole,
    getAllRole,
    patchOneRole,
    deleteOneRole,

    createOnePermission,
    getAllPermission,
    patchOnePermission,
    deleteOnePermission,

    createOneCategory,
    getAllCategory,
    patchOneCategory,
    deleteOneCategory
};