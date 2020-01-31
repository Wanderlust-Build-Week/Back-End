
exports.up = function(knex) {
  return knex.schema.createTable('tours', tours => {

    tours.increments()

    tours.string('submitter', 128).references('username').inTable('users').onUpdate('CASCADE').onDelete('CASCADE')

    tours.string('title', 128).notNullable()
    tours.string('photo', 512).notNullable()
    tours.string('location', 128).notNullable()
    tours.string('description', 1024)

  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('tours')
};
