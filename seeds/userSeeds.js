const { User } = require('../models');

const userData = [
  {
    username: "aubreymlj96",
    password: "IH$Password1!"
    
  },
  {
    username: 'ajohnson23',
    password: 'Password1'
  },
  {
    username: 'aubrey.johnson96',
    password: 'Password1!'
  }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;