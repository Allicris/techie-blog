const router = require('express').Router();
const { Blogs, Blogger } = require('../models');

//Get all of the blogs and bloggers for the homepage
router.get('/', async (req, res) => {
  try {
    const blogsData = await Blogs.findAll({
include: [
  {
    model: Blogger,
    attributes: ['bloggername', 'post'],
  },
],
});

    const bloggers = blogsData.map((blogs) =>
    blogs.get({ plain: true })
    );
    res.render('homepage', {
      bloggers,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

//Get one blog
router.get('/blogs/:id', async (req, res) => {
  try {
    const blogsData = await Blogs.findbyPK(req.params.id, {
      include: [
        {
          model: Blogger,
          attributes: [
            'id',
            'bloggername',
            'icon',
            'post',
          ],
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

//Login route
router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }
  res.render('login');
});

module.exports = router;