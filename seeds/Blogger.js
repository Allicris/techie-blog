const Blogger = require('../models/Blogger');

const bloggerData = [
  {
    comment: "I believe that it will continue to grow in value!",
    user_id : "2",
    blog_id: "1",
  }
];

const seedBlogger = () => Blogger.bulkCreate(bloggerData);
module.exports = seedBlogger;