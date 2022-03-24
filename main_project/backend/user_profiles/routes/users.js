var express = require('express');
var router = express.Router();
const ObjectId = require('mongodb').ObjectId;
const User = require('../models/User');

/* GET users listing. */
router.get('/', function(req, res, next) {
  if (!req.isAuthenticated()){
    res.redirect('/auth/login');
  }
  const _id = ObjectId(req.session.passport.user);
  
  User.findOne({_id}, (err, user) => {
    if (err){
      throw err;
    }
    username = user.username
    email = user.email
    bio = user.bio
    location = user.location
    res.render('edit-profile', { username, email, bio, location });
  });
});

router.post('/', (req, res, next) =>{
  if (!req.isAuthenticated()){
    res.send("403 Forbidden");
  }
  const { username, email, bio, location} = req.body;
  const _id = ObjectId(req.session.passport.user);
  User.updateOne({_id}, {$set: {username, email, bio, location}}, (err) => {
    if (err){
      throw err;
    }
    res.redirect('/users');
  });
});

router.get('/:username', (req, res, next) => {
  const _id = ObjectId(req.session.passport.user);
  
  User.findOne({_id}, (err, user) => {
    if (err || !user){
      res.render('view-profile');
    }
    email = user.email
    bio = user.bio
    location = user.location
    res.render('view-profile', { username, email, bio, location});
  });
});

module.exports = router;
