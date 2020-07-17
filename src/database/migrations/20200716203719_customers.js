
exports.up = function (knex) {

    return knex.schema.createTable('customers', (table) => {

        table.increments('id').primary();
        table.integer('establishment_id').unsigned();
        table.string('name').notNullable();
        table.string('address').notNullable();
        table.string('phone').notNullable();
        table.date('birth').notNullable();
        
        table.foreign('establishment_id').references('establishments.id');

    });

};

exports.down = function (knex) {

    return knex.schema.dropTable('customers');

};
