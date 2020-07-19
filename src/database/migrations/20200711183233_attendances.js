
exports.up = function (knex) {

    return knex.schema.createTable('attendances', (table) => {

        table.increments('id').primary();
        table.integer('establishment_id').unsigned();
        table.integer('customer_id').notNullable();
        table.time('hour').notNullable();
        table.date('date').notNullable();
        table.decimal('price', { precision: 2 }).notNullable();
        table.string('description').nullable();
        table.boolean('status').notNullable();
        
        table.foreign('establishment_id').references('establishments.id');
        table.foreign('customer_id').references('customers.id');

    });

};

exports.down = function (knex) {

    return knex.schema.dropTable('attendances');

};
