const { User } = require('../models/User');

const userData = [
  {
    username: 'allicris',
    email: 'allison@allison.com',
    password: 'allison123'
  },
  {
    username: 'christianp',
    email: 'christianp@pazos.com',
    password: 'christianp123',
  }
];

const seedsUser = () => User.bulkCreate(userData);
module.exports = seedsUser;