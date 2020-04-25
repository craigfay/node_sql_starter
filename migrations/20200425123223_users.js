
// This function will be called  when migrations run
exports.up = function(knex) {
  return knex.schema.createTable('users', function(table) {
    table.increments('id').primary();
    table.string('name').notNull();
    table.string('pswd').notNull();
  });
};

// This function will be called when migrations rollback
exports.down = function(knex) {
  return knex.schema.dropTable('users');
};
