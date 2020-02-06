const bcrypt = require('bcryptjs')

const hashPass = bcrypt.hashSync('password', 10)

exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {username: 'admin', password: hashPass, accountType: 'guide'},
        {username: 'ChaseTours112', password: hashPass, accountType: 'guide' }
      ]);
    });
};
