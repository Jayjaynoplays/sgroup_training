
exports.up = async (knex) => {
    const transaction = await knex.transaction();
    try {
        await transaction.schema.dropTableIfExists('books');
        await transaction.schema.createTable('books', table => {
            table.increments();
            table.string('title').notNullable();
            table.string('description');
            table.integer('author_id').unsigned().references('authors.id').notNullable().onDelete('CASCADE');
            table.dateTime('return_date');
        })
        await transaction.commit()
    } catch (e) {
        console.log(e.message);
        await transaction.rollback()
    }

};

exports.down = async (knex) => {
    const transaction = await knex.transaction();
    try {
        await transaction.schema.dropTableIfExists('books');
        await transaction.commit()
    } catch (e) {
        console.log(e.message);
        await transaction.rollback()
    }
}