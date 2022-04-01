const express = require('express');
const router = express.Router();
const authUtils = require('../utils/hash');
const passport = require('passport');
const User = require('../models/UserSchema');

// GET login page
router.get('/login', (req, res, next) => {
  res.render('login');
});


// POST login page
router.post('/login', passport.authenticate('local', 
  { failureRedirect: '/auth/login', 
    failureFlash: 'Incorrect username and/or password'}), (req, res, next) => {
  res.redirect('/users');
});


// GET register page
router.get('/register', (req, res, next) => {
  res.render('register');
});


// POST register page
router.post('/register', (req, res, next) => {
  console.log('we are here');
  User.findOne({ username: req.body.username}).then((user) => {
    if (user) {
      res.redirect('/auth/login'); // User already exists
    } else {
      const newUser = new User({
        username: req.body.username,
        email: req.body.email,
        bio: req.body.bio,
        location: req.body.location,
        avatar: req.body.avatar,
      });

      newUser.setPassword(req.body.password);
      newUser.save();
      res.redirect('/auth/login');
    }

  });
});

// GET logout page
router.get('/logout', (req, res, next) => {
  req.session.destroy();
  res.redirect('/');
});

module.exports = router;