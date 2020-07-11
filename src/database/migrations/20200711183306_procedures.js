
exports.up = function (knex) {

    return knex.schema.createTable('procedures', (table) => {

        table.increments('id').primary();
        table.integer('establishment_id').unsigned();
        table.string('type').notNullable();
        table.string('name').notNullable();
        table.foreign('establishment_id').references('establishments.id');

    });

};

exports.down = function (knex) {

    return knex.schema.dropTable('procedures');

};
