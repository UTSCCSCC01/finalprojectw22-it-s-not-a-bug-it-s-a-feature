const express = require('express');
const router = express.Router();
const authUtils = require('../utils/hash');
const passport = require('passport');
const flash = require('connect-flash');

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
  const users = req.app.locals.users;
  const payload = {
    username: req.body.username,
    password: authUtils.hashPassword(req.body.password),
  };

  users.insertOne(payload, (err) => {
    if (err) {
      req.flash('error', 'User already exists.');
    } else {
      req.flash('success', 'User created successfully.');
    }

    res.redirect('/auth/register');
  })
});

// GET logout page
router.get('/logout', (req, res, next) => {
  req.session.destroy();
  res.redirect('/');
});

module.exports = router;