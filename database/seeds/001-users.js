
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {username: 'tester123', password: 'needToBcrypt1', accountType: 'guide'},
        {username: 'tester1', password: 'needToBcrypt2', accountType: 'user'},
      ]);
    });
};
