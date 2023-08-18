const Blogs = require('./Blogs');
const Blogger = require('./Blogger');
const User = require('./User');

User.hasMany(Blogs, {
  foreignKey: 'user_id',
});

Blogs.belongsTo(User, {
  foreignKey: 'user_id'
});

Blogger.belongsTo(User, {
  foreignKey: 'user_id',
});

Blogger.belongsTo(Blogs, {
  foreignKey: 'blog_id',
});

User.hasMany(Blogger, {
  foreignKey: 'user_id'
});

Blogs.hasMany(Blogger, {
  foreignKey: 'blog_id',
});

module.exports = User, Blogger, Blogs;