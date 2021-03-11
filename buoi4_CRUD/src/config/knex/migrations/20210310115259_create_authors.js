
exports.up = async (knex) => {
    const transaction = await knex.transaction();
    try {
        await transaction.schema.dropTableIfExists('authors');
        await transaction.schema.createTable('authors', (table) => {
            table.increments();
            table.string('first_name');
            table.string('last_name');
            table.string('age');
        });
        await transaction.commit();
    } catch (error) {
        await transaction.rollback();
    }
};

exports.down = async (knex) => {
    const transaction = await knex.transaction();
    try {
        await transaction.schema.dropTableIfExists('authors');
        await transaction.commit();
    } catch (error) {
        await transaction.rollback();
    }
}