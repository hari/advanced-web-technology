const express = require('express');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const methodOverride = require('method-override');
const path = require('path');
const routes = require('./routes');
const SqliteStore = require('connect-sqlite3')(session);

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(cookieParser());

const maxAge = 1000 * 60 * 60 * 1; // 1 hour
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    store: new SqliteStore({
      db: './sessions.db',
    }),
    saveUninitialized: false,
    cookie: {
      httpOnly: true,
      maxAge,
      secure: process.env.NODE_ENV === 'production',
    },
  })
);

app.use(
  // This is a workaround to allow DELETE requests to work, some methods are not supported by default in HTML forms
  methodOverride((request, response) => {
    if (request.body?._method) {
      const method = request.body._method;
      delete request.body._method;
      return method;
    }
  })
);

app.use((req, res, next) => {
  res.locals.success = req.session.success;
  res.locals.error = req.session.error;
  req.session.success = null;
  req.session.error = null;
  res.locals.externalProfile = false;
  next();
});

app.use('/', routes);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke! ' + err.message);
});

module.exports = app;
