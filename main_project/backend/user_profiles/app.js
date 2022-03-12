// var createError = require('http-errors'),
//     express = require('express'),
//     path = require('path'),
//     cookieParser = require('cookie-parser'),
//     logger = require('morgan');


// const MongoClient = require('mongodb').MongoClient,
//       passport = require('.auth/passport'),
//       Strategy = require('passport-local').Strategy,
//       session = require('express-session'),
//       flash = require('connect-flash'),
//       hbs = require('hbs'),
//       authUtils = require('./utils/hash'),
//       middleware = require('connect-ensure-login'),
//       Session = require('express-session'),
//       bodyParse = require('body-parser'),
//       FileStore = require('session-file-store')(Session),
//       config = require('./config/default'),
//       NodeMediaServer = require('./media_server'),
//       authRouter = require('./routes/auth');

// var indexRouter = require('./routes/index'),
//     usersRouter = require('./routes/users');

// var app = express();
// // Connect mongodb
// // MongoClient.connect('mongodb://localhost', (err, client) => {
// //   if (err) {
// //     throw err;
// //   }

// //   const db = client.db('account-app');
// //   const users = db.collection('users');
// //   app.locals.users = users;
// // });
// // Create authentication strategy
// // passport.use(new Strategy((username, password, done) => {
// //     app.locals.users.findOne({ username }, (err, user) => {
// //       if (err) {
// //         return done(err);
// //       }

// //       if (!user) {
// //         return done(null, false);
// //       }

// //       if (user.password != authUtils.hashPassword(password)) {
// //         return done(null, false);
// //       }

// //       return done(null, user);
// //     });
// //   }
// // ));

// //Serializer
// // passport.serializeUser((user, done) => {
// //   done(null, user._id);
// // });

// // // Deserializer
// // passport.deserializeUser((id, done) => {
// //   done(null, { id });
// // });

// // view engine setup
// app.use(express.static('public'));
// app.use(flash());
// app.use(require('cookie-parser')());
// app.use(bodyParse.urlencoded({extended: true}));
// app.use(bodyParse.json({extended: true}));
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'hbs');
// app.use(logger('dev'));
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));
// app.user(passport.initialize());
// app.use(passport.session());
// app.use(session({
//   // secret: 'secret',
//   // resave: false,
//   // saveUninitialized: false,
//   store: new FileStore({
//   path : './server/sessions'
//   }),
//   secret: config.server.secret,
//   maxAge : Date().now + (60 * 1000 * 30)
// }));

// app.use(flash());

// app.use((req, res, next) => {
//   res.locals.loggedIn = req.isAuthenticated();
//   next();
// });

// //login and reg strategies 
// app.use('/login', require('./routes/login'));
// app.user('/register', require('./routes/register'));

// app.use('/', indexRouter);

// // app.use('/users', usersRouter);

// // app.use('/auth', authRouter);

// // catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   next(createError(404));
// });

// // error handler
// app.use(function(err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};

//   // render the error page
//   res.status(err.status || 500);
//   res.render('error');
// });
// node_media_server.run();
// module.exports = app;
const express = require('express'),
    path = require('path'),
    session = require('express-session'),
    bodyParse = require('body-parser'),
    passport = require('./auth/passport'),
    mongoose = require('mongoose'),
    middleware = require('connect-ensure-login'),
    MongoStore = require('connect-mongo');
    config = require('./config/default'),
    flash = require('connect-flash'),
    port = config.server.port,
    app = express(),
    node_media_server = require('./media_server'),
    //thumbnail_generator = require('./cron/thumbnails');

mongoose.connect('mongodb://127.0.0.1/nodeStream' , { useNewUrlParser: true });

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './views'));
app.use(express.static('public'));
//app.use('/thumbnails', express.static('server/thumbnails'));
app.use(flash());

app.use(require('cookie-parser')());
app.use(bodyParse.urlencoded({extended: true}));
app.use(bodyParse.json({extended: true}));

app.use(session({
    store: MongoStore.create({
        mongoUrl: 'mongodb://127.0.0.1/nodeStream',
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
app.use('/login', require('./routes/login'));
app.use('/register', require('./routes/register'));
//app.use('/settings', require('./routes/settings'));
//app.use('/streams', require('./routes/streams'));
app.use('/user', require('./routes/users'));

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