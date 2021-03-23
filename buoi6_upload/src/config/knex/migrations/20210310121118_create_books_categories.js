
exports.up = async (knex) => {
    const transaction = await knex.transaction();
    try {
        await transaction.schema.createTable('books_categories', bk_ct => {
            bk_ct.increments();
            bk_ct.integer('book_id').unsigned().references('books.id').onDelete('CASCADE');
            bk_ct.integer('category_id').unsigned().references('categories.id').onDelete('CASCADE');
        });
        await transaction.commit()
    } catch (e) {
        console.log(e.message);
        await transaction.rollback();
    }
};

exports.down = async (knex) => {
    const transaction = await knex.transaction();
    try {
        await transaction.schema.dropTableIfExists('books_categories');
        await transaction.commit();

    } catch (e) {
        console.log(e.message);
        await transaction.rollback();
    }
};
