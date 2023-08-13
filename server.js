const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const routes = require('./controllers');
const sequelize = require('./config/connection');
const helpers = require('./utils/helpers')

const app = express();
const PORT = process.env.PORT || 3001;

//Setting up sessions, may or may not keep cookies
const sess = {
  secret: 'Super secret secret',
  cookie: {
    //Stored in milliseconds
    maxAge: 20 * 60 * 60 * 1000, //the session would expire after one day    
  },
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db:sequelize,
  }),
};

app.use(session(sess));

//not sure if I should keep hbs variable here.
const hbs = exphbs.create({ helpers });

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);

sequelize.sync ({ force: false }).then(() => {
  app.listen(PORT, () =>
  console.log(
    '\nServer running on port ${PORT}. Visit https://localhost:${PORT} and start blogging!'
  )
  );
});