const router = require('express').Router();
const { Blogs, Blogger } = require('../models');
const withAuth = require('../utils/auth');
//Get all of the blogs and bloggers for the homepage
router.get('/', async (req, res) => {
  try {
    const blogsData = await Blogs.findAll({
include: [
  {
    model: Blogger,
    attributes: ['id', 'comment', 'user_id', 'blog_id'],
    include: {
      model: User,
      attributes: ['username']
    },
  },
  {
    model: User,
    attributes: ['username']
  }
],
});
    const blogs = blogsData.map((blogs) =>
    blogs.get({ plain: true })
    );
    res.render('homepage', {
      blogs,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

//Get one blog
router.get('/blogs/:id', withAuth, async (req, res) => {
  try {
    const blogsData = await Blogs.findbyPK(req.params.id, {
      include: [
        {
          model: Blogger,
          attributes: ['id','comment', 'user_id', 'post_id'],
        },
      ],
    });
    const blogs = blogsData.get({ plain: true });
    res.render('blogs', { blogs, loggedIn: req.session.loggedIn });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get('/blogger/:id', withAuth, async (req, res) => {
  try {
    const dbAnimalsData = await Blogger.findByPk(req.params.id);

    const blogger = dbBloggerData.get({ plain: true });

    res.render('blogger', {
      blogger,
       loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

//Login route
router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }
  res.render('login');
});

module.exports = router;