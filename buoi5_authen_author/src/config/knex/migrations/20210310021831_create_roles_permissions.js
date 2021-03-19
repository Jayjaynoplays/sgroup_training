exports.up = async (knex) => {
    const transaction = await knex.transaction();
    try {
        await transaction.schema.dropTableIfExists('roles_permissions');
        await transaction.schema.createTable('roles_permissions', (table) => {
            table.increments('id').primary();
            table.integer('role_id').unsigned();
            table.foreign('role_id').references('roles.id').onDelete('CASCADE');
            table.integer('permission_id').unsigned();
            table.foreign('permission_id').references('permissions.id').onDelete('CASCADE');
        });
        await transaction.commit()
    } catch (error) {
        await transaction.rollback();
    }
};

exports.down = async (knex) => {
    return knex.schema.dropTable('roles_permissions');
};
