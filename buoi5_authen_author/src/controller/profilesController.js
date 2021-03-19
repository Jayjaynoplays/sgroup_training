const knex = require('../config/knex/connection.js')
const profilesService = require('../service/profilesServices')

const createOne = async (req, res, next) => {
    try {
        const data = await knex('profiles').insert({
            email: req.body.email,
            gender: req.body.gender,
            author_id: req.body.author_id
        })

        const inserted = await knex('profiles').where('id', data[0]).first()

        return res.json({
            status: 'success insert',
            data: inserted,
        })


    } catch (e) {
        console.log(e.message);

        const author_idArr = await knex('profiles').select('author_id');
        const authorArr = await knex('authors').select('id');

        const checkDeclared = () => {
            for (let i of author_idArr) {
                if (i.author_id == req.body.author_id) return true
            }
        }
        if (checkDeclared()) {
            return res.json({
                status: 'error',
                code: 500,
                message: 'this author is already decleared',
            })
        }
        const checkExitst = () => {
            for (let i of authorArr) {
                if (i.author_id !== req.body.author_id) return false
            }
        }
        if (checkExitst() == false) {
            return res.json({
                status: 'error',
                code: 500,
                message: 'no author id found',
            })
        }
        return res.json({
            status: 'error',
            code: 500,
            message: 'Failed to insert profiles',
            error: e.message,
        });
    }
}

const getAll = async (req, res, next) => {
    try {
        // let {page, limit} = req.query  -> destructuring js

        let page = req.query.page || 1;
        let limit = req.query.limit || 2
        let q_email = req.query.q_e || "";
        // let q_authorId = req.query.q_aId || "";

        const data = await knex('profiles')
            .where('email', 'like', `%${q_email}%`)
            .orderBy("id", "asc")
            .offset((page * limit) - limit)
            .limit(limit)
            .select();
        if (data.length < 1)
            return res.json({
                status: "profile not found",
            })
        return res.json({
            status: 'success',
            data,
            page: parseInt(page, 10),
            limit: parseInt(limit, 10),
        })
    } catch (error) {
        console.log(error.message);
        return res.json({
            status: 'error',
            code: 500,
            message: 'Failed to get profiles',
            error: error.message
        })
    }
}

const getOne = async (req, res, next) => {
    try {
        const data = await profilesService.getOne(req);
        if (!data) {
            return res.json({
                status: 'fail',
                code: 404,
                message: 'profile not found',
            })
        } else return res.json({
            status: "success",
            data,
        })
    } catch (error) {
        console.log(error.message);
        return res.json({
            status: 'error',
            code: 500,
            message: 'Failed to get profile',
        })
    }
}

const patchOne = async (req, res, next) => {
    try {
        const data = await profilesService.getOne(req);

        if (!data) return res.json({
            status: 'fail',
            statusCode: 400,
            message: 'authors profile does not exist'
        })
        await knex('profiles').where({ author_id: q_authorId }).update({
            email: req.body.email,
            gender: req.body.gender,
        });
        return res.json({
            status: 'update success'
        })
    } catch (error) {
        console.log(error.message);
        return res.json({
            status: 'error',
            code: 500,
            message: 'update fail',
            error: error.message
        });
    }
}

const deleteOne = async (req, res, next) => {
    try {
        const data = await profilesService.getOne(req);
        
        if (!data) {
            return res.json({
                status: 'fail',
                statusCode: 400,
                message: 'Author profile does not exist'
            })
        }
        await knex('profiles').where({ author_id: q_authorId }).del()
        return res.json({
            status: 'delete success'
        });
    } catch (error) {
        console.log(error.message);
        return res.json({
            status: 'fail',
            code: 500,
            message: 'delete fail',
            error: error.message
        });
    }
}

module.exports = {
    createOne,
    getAll,
    getOne,
    patchOne,
    deleteOne
}