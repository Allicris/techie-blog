const User = require('../models/User');
// const sequelize = require('../config/connection');
// sequelize.sync({ force: true })
// .then(() => {

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
  },
  {
    username: 'marylinMUA',
    email: 'marylin@mua.com',
    password: 'marylin123!',
  }
];
// })
//   .catch((error) => {
//     console.error('Error syncing database:', error);
//   });

const seedUser = () => User.bulkCreate(userData);
module.exports = seedUser;