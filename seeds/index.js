const sequelize = require('../config/connection');
const seedBlogs = require('./Blog');
const seedBlogger = require('./Blogger');
const seedUser = require('./User');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedBlogs();

  await seedBlogger();

  await seedUser();

  process.exit(0);
};

seedAll();