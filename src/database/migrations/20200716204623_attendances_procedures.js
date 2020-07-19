
exports.up = function (knex) {

  return knex.schema.createTable('attendences_procedures', (table) => {

    table.increments('id').primary();
    table.integer('procedure_id').notNullable();
    table.integer('attendence_id').notNullable();
    table.integer('establishment_id').notNullable();
    
    table.foreign('procedure_id').references('procedures.id');
    table.foreign('attendence_id').references('attendences.id');
    table.foreign('establishment_id').references('establishments.id');

  });

};

exports.down = function (knex) {

  return knex.schema.dropTable('attendences_procedures');

};
