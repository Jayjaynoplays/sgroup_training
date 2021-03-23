exports.up = async (knex) => {
    const transaction = await knex.transaction();
    try {
        await transaction.schema.dropTableIfExists('permissions');
        await transaction.schema.createTable('permissions', (table) => {
            table.increments('id').primary();
            table.string('name').unique();
            table.timestamp('created_at').defaultTo(knex.fn.now());
            table.timestamp('updated_at').defaultTo(knex.raw('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'));
        });
        await transaction.commit()
    } catch (error) {
        await transaction.rollback();
    }

};

exports.down = async (knex) => {
    const transaction = await knex.transaction();
    try {
        await transaction.schema.dropTableIfExists('permissions');
        await transaction.commit();
    } catch (error) {
        await transaction.rollback();
    }
};
