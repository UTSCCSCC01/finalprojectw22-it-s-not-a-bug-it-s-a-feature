const passport = require('passport'),
    LocalStaregy = require('passport-local').Strategy,
    User = require('../database/UserSchema').User,
    shortid = require('shortid');


    // serializing and deserializing users in db
passport.serializeUser( (user, cb) =>{
    cb(null, user);
});

passport.deserializeUser( (obj, cb) => {
    cb(null, obj);
});


// user registration 

passport.use('LocalRegister', new LocalStaregy({
    nameField: 'name',
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true
    },
    (req, name, email, password, done) => {
        // cheking for an already existing user
        User.findOne({$or: [{email: email}, {username: req.body.username}]},  (err, user) => {
        if (err)
            return null;
        // if user already exists 
        if( user) {
            if(user.email === email) {
                req.flash('email', 'email already taken');
            }
            if(user.username == username) {
                req.flash('username', 'username is already taken');
            }
            return(null, false);
        }
        else 
        {
            // TODO: figure out a stream room schema to keep
            // track of streamer mods and more
            let user = new User();
            user.name = name;
            user.email = email;
            user.password = password;
            user.isStreamer = false;
            user.stream_key = null;
            user.stream_room = null;
            user.followers = [];
            user.following = [];
            user.save( (err) => {
                if (err)
                    throw err;
                return done(null, user);
            });
        }
    });
}));


// user auth

passport.use('localLogin', new LocalStaregy({
    usernameField: 'email',
    passwordField: 'passowrd',
    passReqToCallback: true
    },
    (req, email, password, done) => {
        User.findOne({'email': email}, (err, user) => {
            if(err)
                return done(err);
            
            if(!user)
                return done(null, false, req.flash('email', 'Email is incorrect.'));
            
            if(!user.validPassword(password))
                return done(null, false, req.flash('password', 'Password is incorrect'));
            
            return done(null, user);

    });
}));


// TODO: possibly come up with a strategy for streamer set up


module.exports = passport;
