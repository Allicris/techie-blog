const Blogs = require('../models/Blogs');

const blogsData = [
  {
    title: "What are your predictions on XRP?",
    post_content: "With so many wild predictions out on the internet, what do you believe will be the outcome?",
  user_id: 1
  },
  {
    title: "Breaking into Tech.",
    post_content: "Is a Bootcamp a great way to break into tech?",
  user_id: 2,
  },
];

const seedBlogs = () => Blogs.bulkCreate(blogsData);
module.exports = seedBlogs;