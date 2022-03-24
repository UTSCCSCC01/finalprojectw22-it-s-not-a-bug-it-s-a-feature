var mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');
var crypto = require('crypto');
const { kStringMaxLength } = require('buffer');

// User Model
var UserSchema = new mongoose.Schema({
  username: {
    type: String,
    lowercase: true,
    unique: true,
    required: [true, "can't be blank"],
    match: [/^[a-zA-Z0-9]+$/, 'is invalid']
  },
  email: {
    type: String,
    lowercase: true,
    unique: true,
    required: [true, "can't be blank"], 
    match: [/\S+@\S+\.\S+/, 'is invalid']
  },
  bio: String,
  location: String,
  avatar: String, 
  salt: String,
  hash: String
});

UserSchema.plugin(uniqueValidator, {message: 'is already taken.'});

// User Model Methods
UserSchema.methods.setPassword = function(password){
    this.salt = crypto.randomBytes(16).toString('hex');
    this.hash = crypto.pbkdf2Sync(password, this.salt, 10000, 256, 'sha256').toString('hex');
};

UserSchema.methods.validPassword = function(password) {
    var hash = crypto.pbkdf2Sync(password, this.salt, 10000, 256, 'sha256').toString('hex');
    return this.hash === hash;
};

module.exports = User = mongoose.model('User', UserSchema);