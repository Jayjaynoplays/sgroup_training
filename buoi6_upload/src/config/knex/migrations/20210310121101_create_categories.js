
exports.up = async (knex) => {
    const transaction = await knex.transaction()
    try {
        await transaction.schema.createTable('categories', category => {
            category.increments();
            category.string('name').notNullable().unique();
        });
        await transaction.commit();
    } catch (e) {
        console.log(e.message);
        await transaction.rollback()
    }
};

exports.down = async (knex) => {
    const transaction = await knex.transaction()
    try {
        await transaction.schema.dropTableIfExists('categories');
        await transaction.commit()
    } catch (e) {
        console.log(e.message);
        await transaction.rollback()
    }
};
