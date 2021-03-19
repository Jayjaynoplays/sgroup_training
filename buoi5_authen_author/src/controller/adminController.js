const knex = require('../config/knex/connection.js');
const adminService = require('../service/adminService')

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
module.exports = {
    createOneRole,
    getAllRole,
    patchOneRole,
    deleteOneRole,
    getAllPermission,
    createOnePermission,
    patchOnePermission,
    deleteOnePermission
};