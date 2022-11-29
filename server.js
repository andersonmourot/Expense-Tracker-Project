const express = require('express');
const routes = require('./routes');
const sequelize = require('./config/connection');
const { Cookie } = require('express-session');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// turn on routes
app.use(routes);

// turn on connection to db and server

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});

const sess = {
  secret: 'secret',

  cookie: { 
    maxAge: 5000,
    httpOnly: true,
    secure: false,
    sameSite: 'strict',
},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  })
}
