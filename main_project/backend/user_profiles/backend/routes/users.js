var express = require('express');
var router = express.Router();
const ObjectId = require('mongodb').ObjectId;

/* GET users listing. */
router.get('/', function(req, res, next) {
  if (!req.isAuthenticated()){
    res.redirect('/auth/login');
  }
  const users = req.app.locals.users;
  const _id = ObjectId(req.session.passport.user);
  
  users.findOne({_id}, (err, results) => {
    if (err){
      throw err;
    }
    res.render('edit-profile', { ...results });
  });
});

router.get('/:username', (req, res, next) => {
  const users = req.app.locals.users;
  const username = req.params.username;
  
  users.findOne({username}, (err, results) => {
    if (err || !results){
      res.render('view-profile');
    }
    res.render('view-profile', { ...results, username});
  });
});

router.post('/', (req, res, next) =>{
  if (!req.isAuthenticated()){
    res.send("403 Forbidden");
  }
  const users = req.app.locals.users;
  const username = req.params.username;
  const { name, location, youtube, twitter} = req.body;
  const _id = ObjectId(req.session.passport.user);
  users.updateOne({_id}, {$set: {name, location, youtube, twitter}}, (err) => {
    if (err){
      throw err;
    }
    res.redirect('/users');
  });
});

module.exports = router;
