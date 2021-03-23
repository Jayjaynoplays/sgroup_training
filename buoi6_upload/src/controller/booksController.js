const knex = require('../config/knex/connection.js');

const createOne = async (req, res, next) => {
    try {
        const data = await knex('books').insert({
            title: req.body.title,
            description: req.body.description,
            author_id: req.body.author_id,
            return_date: req.body.return_date
        })
        const inserted = await knex('books').where('id', data[0]).first()

        return res.json({
            status: 'success insert',
            data: inserted,
        })

    } catch (error) {
        console.log(error.message);
        const authorArr = await knex('authors').select('id');

        for (let i of authorArr) {
            if (i.author_id !== req.body.author_id)
                return res.json({
                    status: 'error',
                    code: 500,
                    message: 'no author id found',
                })
        }

        return res.json({
            status: 'error',
            code: 500,
            message: 'Failed to insert books',
        })
    }
}

const getAll = async (req, res, next) => {
    try {
        const data = await knex('books').select()
        return res.json({
            status: 'success',
            data,
        })
    } catch (error) {
        return res.json({
            status: 'error',
            code: 500,
            message: 'Failed to get all books',
        })
    }
}

const getAsAuthorOrTitle = async (req, res, next) => {
    try {
        let page = req.query.page || 1;
        let limit = req.query.limit || 2
        let q_authorId = req.query.q_aId || ""
        let q_title = req.query.q_tl || ""
        if (q_title !== "" && q_authorId !== "") {
            const booksAuthorTitle = await knex('books')
                .where('title', 'like', `%${q_title}%`)
                .andWhere('author_id', q_authorId)
                .orderBy("id", "asc")
                .offset((page * limit) - limit)
                .limit(limit)
                .select();
            if (booksAuthorTitle.length < 1)
                return res.json({
                    status: "book not found",
                })
            return res.json({
                status: 'success',
                data: booksAuthorTitle,
                page: parseInt(page, 10),
                limit: parseInt(limit, 10),
            })
        } else if (q_authorId !== "") {
            const booksAutId = await knex('books')
                .where('author_id', q_authorId)
                .orderBy("id", "asc")
                .offset((page * limit) - limit)
                .limit(limit)
                .select();
            if (booksAutId.length < 1)
                return res.json({
                    status: "book not found",
                })
            return res.json({
                status: 'success',
                booksAutId,
                page: parseInt(page, 10),
                limit: parseInt(limit, 10),
            })
        } else if (q_title !== "") {
            const booksTitle = await knex('books')
                .where('title', 'like', `%${q_title}%`)
                .orderBy("id", "asc")
                .offset((page * limit) - limit)
                .limit(limit)
                .select();
            if (booksAutId.length < 1)
                return res.json({
                    status: "book not found",
                })
            return res.json({
                status: 'success',
                data: booksTitle,
                page: parseInt(page, 10),
                limit: parseInt(limit, 10),
            })
        }

        const booksAll = await knex('books')
            .orderBy("id", "asc")
            .offset((page * limit) - limit)
            .limit(limit)
            .select();
        return res.json({
            status: 'success',
            booksAll,
            page: parseInt(page, 10),
            limit: parseInt(limit, 10),
        })
    } catch (error) {
        console.log(error.message);
        return res.json({
            status: 'error',
            code: 500,
            message: 'Failed to get books',
            error: error.message
        })
    }
}

const getAsCategory = async (req, res, next) => {
    try {
        let category = req.query.q_cat || "";
        const booksCategory = await knex('books')
            .select('books.id',
                'books.title',
                'books.description',
                'books.author_id',
                'books.return_date')
            .leftOuterJoin('books_categories', 'books_categories.book_id', 'books.id')
            .where('books_categories.category_id', category)
        if (!booksCategory) {
            return res.json({
                status: 'error',
                code: 500,
                message: 'Failed to get books as category',
                error: error.message
            })
        }
        return res.json({
            status: 'success',
            data: booksCategory,
        })


    } catch (error) {
        console.log(error.message);
    }
}
const patchOne = async (req, res, next) => {
    try {
        let q_bookId = req.params.q_bId;
        const data = await knex('books')
            .where({ id: q_bookId })
            .first();
        if (!data) return res.json({
            status: 'fail',
            statusCode: 400,
            message: 'book does not exist'
        })
        await knex('books').where({ id: q_bookId }).update({
            title: req.body.title,
            description: req.body.description,
            author_id: req.body.author_id,
            return_date: req.body.return_date
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
        let q_bookId = req.params.id || "";
        const data = await knex('books').where({ id: q_bookId }).first();
        if (!data) {
            return res.json({
                status: 'fail',
                statusCode: 400,
                message: 'books does not exist'
            })
        }
        await knex('books').where({ id: q_bookId }).del()
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
    getAsAuthorOrTitle,
    getAsCategory,
    patchOne,
    deleteOne
}