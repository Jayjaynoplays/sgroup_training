const knex = require('../config/knex/connection.js')

const createOne = async (req, res, next) => {
    try {
        const data = await knex('authors').insert({
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            age: req.body.age
        })

        // bởi vì return của hàm insert chỉ trả về ID của record mới vừa được insert, nên để lấy được values của record đó thì cần gán record đó cho 1 biến khác, đồng thời dùng biến đó để check xem dữ liệu đã đc insert vào db chưa

        const inserted = await knex('authors').where('id', data[0]).first()

        // dòng trên có nghĩa là: chọn * from bảng authors where id = phần tử đầu tiên của data
        // method insert của knex trả về MẢNG các value được insert
        // Thông thường id luôn là phần tử[0]

        // như dòng 6 thì biến data có dạng là: 

        /*data [
            {"id": ...},
            {first_name: ...},
            {last_name: ...}
        ] */

        return res.json({
            status: 'success',
            data: inserted,

            /* lúc này trả về lại data đại loại kiểu trả về cho FE để hiển thị kiểu "author có họ tên abc def với số tuổi x đã được thêm vào danh sách", tuy việc này ko cần thiết vì fe có thể lấy được innerHTML của các thẻ input nhưng ờm, why not nhỉ :D */
        })
    } catch (e) {
        console.log(e.message);
        return res.json({
            status: 'error',
            code: 500,
            message: 'Failed to insert author',
        });
    }
}

const getAll = async (req, res, next) => {
    try {
        // let {page, limit} = req.query  -> destructuring js

        let page = req.query.page || 1;
        let limit = req.query.limit || 2
        let q_name = req.query.q_n || "";

        const data = await knex('authors')
            .where('first_name', 'like', `%${q_name}%`)
            .orWhere('last_name', 'like', `%${q_name}%`)
            .orderBy("id", "asc")
            .offset((page * limit) - limit)
            .limit(limit)
            .select();
        if (data.length < 1)
            return res.json({
                status: "not found",
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
            message: 'Failed to get author',
        })
    }
}

const getOne = async (req, res, next) => {
    try {
        const data = await knex('authors').where({ id: req.params.id }).first();
        if (!data) {
            return res.json({
                status: 'fail',
                code: 404,
                message: 'Author not found',
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
            message: 'Failed to get author',
        })
    }
}

const patchOne = async (req, res, next) => {
    try {
        const author = await knex('authors').where({ id: req.params.id }).first();
        if (!author) return res.json({
            status: 'fail',
            statusCode: 400,
            message: 'Author does not exist'
        })
        await knex('authors').where({ id: req.params.id }).update({
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            age: parseInt(req.body.age)
        });
        return res.json({
            status: 'update success at ID: ' + req.params.id
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
        const author = await knex('authors').where({ id: req.params.id }).first();
        if (!author) {
            return res.json({
                status: 'fail',
                statusCode: 400,
                message: 'Author does not exist'
            })
        }
        await knex('authors').where({ id: req.params.id }).del()
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