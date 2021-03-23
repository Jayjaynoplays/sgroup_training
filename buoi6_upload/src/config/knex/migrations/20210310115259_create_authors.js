
exports.up = async (knex) => {
    const transaction = await knex.transaction();
    try {
        await transaction.schema.dropTableIfExists('authors');
        await transaction.schema.createTable('authors', (table) => {
            table.increments();
            table.string('first_name');
            table.string('last_name');
            table.string('password');
            table.string('age');
            table.integer('role_id').unsigned();
            table.foreign('role_id').references('roles.id').onDelete('CASCADE');

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