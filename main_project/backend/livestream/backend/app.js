
const express = require('express'),
    path = require('path'),
    bodyParse = require('body-parser'),
    passport = require('passport'),
    mongoose = require('mongoose'),
    middleware = require('connect-ensure-login'),
    MongoStore = require('connect-mongo');
    config = require('./config/default'),
    flash = require('connect-flash'),
    port = config.server.port,
    app = express(),
    hbs = require('hbs'),
    authUtils = require('./utils/hash'),
    User = require('./models/UserSchema'),
    authRouter = require('./routes/auth');

let cors = require('cors');

const node_media_server = require('./media_server');
const thumbnail_generator = require('./cron/thumbnails');

const Strategy = require('passport-local').Strategy;
const session = require('express-session');

var createError = require('http-errors'),
    cookieParser = require('cookie-parser'),
    logger = require('morgan');
  
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

//const { Strategy } = require('passport-local');

// BELOW HERE YOSHIO'S WORK
var app = express();

mongoose.connect('mongodb://localhost:27017/myapp' , { useNewUrlParser: true });

passport.use(new Strategy((username, password, done) => {
    User.findOne({ username }, (err, user) => {
      if (err) {
        return done(err);
      }

      if (!user) {
        return done(null, false);
      }

      if (!user.validPassword(password)) {
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

  // my old view engine

// app.set('view engine', 'ejs');
// app.set('views', path.join(__dirname, './views'));


  // Yoshio's new view engine 
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//app.use(express.static('public'));
app.use('/thumbnails', express.static('backend/thumbnails'));
app.use(flash());

// app.use(require('cookie-parser')());
app.use(bodyParse.urlencoded({extended: true}));
app.use(bodyParse.json({extended: true}));

app.use(session({
    store: MongoStore.create({
        //mongoUrl: 'mongodb://127.0.0.1/nodeStream',
        mongoUrl: 'mongodb://localhost:27017/myapp', 
        ttl: 14 * 24 * 60 * 60 // = 14 days. Default
    }),
    secret: config.server.secret,
    maxAge : Date().now + (60 * 1000 * 30),
    resave : true,
    saveUninitialized : false,
}));

app.use(passport.initialize());
app.use(passport.session());

// Register app routes
//app.use('/login', require('./routes/login'));
//app.use('/register', require('./routes/register'));
app.use(cors());
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/auth', authRouter);
app.use('/settings', require('./routes/settings'));
app.use('/streams', require('./routes/streams'));

app.use('/user', require('./routes/users'));
app.use('/post', require('./routes/post'));

app.get('/logout', (req, res) => {
    req.logout();
    return res.redirect('/login');
});

app.get('*', middleware.ensureLoggedIn(), (req, res) => {
    res.render('index');
});

app.listen(port, () => console.log(`App listening on ${port}!`));
node_media_server.run();
thumbnail_generator.start();