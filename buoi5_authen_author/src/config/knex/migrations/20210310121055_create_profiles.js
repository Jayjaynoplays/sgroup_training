
exports.up = async (knex) => {
    const transaction = await knex.transaction();
    try {
        await transaction.schema.dropTableIfExists('profiles');
        await transaction.schema.createTable('profiles', profile => {
            profile.increments();
            profile.string('email').unique();
            profile.boolean('gender');
            profile.integer('author_id').notNullable().unique().unsigned().references('authors.id').onDelete('CASCADE');
        })
        await transaction.commit();
    } catch (e) {
        console.log(e.message);
        await transaction.rollback();
    }
};

exports.down = async (knex) => {
    const transaction = await knex.transaction();
    try {
        await transaction.schema.dropTableIfExists('profiles');
        await transaction.commit()
    } catch (e) {
        console.log(e.message);
        await transaction.rollback();
    }
};
