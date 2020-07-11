
exports.up = function (knex) {

    return knex.schema.createTable('attendances', (table) => {

        table.increments('id').primary();
        table.integer('establishment_id').unsigned();
        table.integer('procedure_id').unsigned();
        table.string('name_client').notNullable();
        table.boolean('type_attendance').notNullable();
        table.date('hour').notNullable();
        table.date('date').notNullable();
        table.decimal('price', { precision: 2 }).notNullable();
        table.boolean('status').notNullable();
        table.foreign('establishment_id').references('establishments.id');
        table.foreign('procedure_id').references('procedures.id');

    });

};

exports.down = function (knex) {

    return knex.schema.dropTable('attendances');

};
