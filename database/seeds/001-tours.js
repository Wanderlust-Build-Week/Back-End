
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('tours').del()
    .then(function () {
      // Inserts seed entries
      return knex('tours').insert([
        {user: 'ChaseTours112', title: 'Snorkeling in the Blue', photo: 'prettyphoto.url', location: 'Bahli', duration: '3 Hours', guide: 'Private', description: 'Beautiful. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'},
        {user: 'ChaseTours112', title: 'Mountain Hike', photo: 'prettyphoto.url', location: 'Bahli', duration: '5 Hours', guide: 'Private', description: 'Stunning. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'},
        {user: 'admin', title: 'Skiing', photo: 'prettyphoto.url', location: 'Rocky Mountains', duration: '7 Hours', guide: 'Professional', description: 'Snowy. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'},
        {user: 'admin', title: 'Snow Tubing', photo: 'prettyphoto.url', location: 'Rocky Mountains', duration: '3 Hours', guide: 'Professional', description: 'Snowy Fun. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'},
      ]);
    });
};
