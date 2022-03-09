var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');


const MongoClient = require('mongodb').MongoClient;
const passport = require('passport');
const Strategy = require('passport-local').Strategy;
const session = require('express-session');
const flash = require('connect-flash');
const hbs = require('hbs');
const authUtils = require('./utils/hash');
const middleware = require('connect-ensure-login'),
                  express = require('express'),
                  Session = require('express-session'),
                  bodyParse = require('body-parser'),
                  FileStore = require('session-file-store')(Session),
                  config = require('./config/default'),
                  flash = require('connect-flash'),
                  NodeMediaServer = require('./media_server');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

const authRouter = require('./routes/auth');

var app = express();
// Connect mongodb
MongoClient.connect('mongodb://localhost', (err, client) => {
  if (err) {
    throw err;
  }

  const db = client.db('account-app');
  const users = db.collection('users');
  app.locals.users = users;
});
// Create authentication strategy
passport.use(new Strategy((username, password, done) => {
    app.locals.users.findOne({ username }, (err, user) => {
      if (err) {
        return done(err);
      }

      if (!user) {
        return done(null, false);
      }

      if (user.password != authUtils.hashPassword(password)) {
        return done(null, false);
      }

      return done(null, user);
    });
  }
));

//Serializer
passport.serializeUser((user, done) => {
  done(null, user._id);
});

// Deserializer
passport.deserializeUser((id, done) => {
  done(null, { id });
});

// view engine setup
app.use(express.static('public'));
app.use(flash());
app.use(require('cookie-parser')());
app.use(bodyParse.urlencoded({extended: true}));
app.use(bodyParse.json({extended: true}));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(session({
  // secret: 'secret',
  // resave: false,
  // saveUninitialized: false,
  store: new FileStore({
  path : './server/sessions'
  }),
  secret: config.server.secret,
  maxAge : Date().now + (60 * 1000 * 30)
}));

app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

app.use((req, res, next) => {
  res.locals.loggedIn = req.isAuthenticated();
  next();
});

app.use('/', indexRouter);
app.use('/users', usersRouter);

app.use('/auth', authRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});
node_media_server.run();
module.exports = app;
