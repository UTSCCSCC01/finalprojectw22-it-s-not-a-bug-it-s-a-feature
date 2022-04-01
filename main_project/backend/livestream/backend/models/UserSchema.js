var mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');
var crypto = require('crypto');
const { kStringMaxLength } = require('buffer');

let Schema = mongoose.Schema;
let shortid = require('shortid');

// User Model
var UserSchema = new mongoose.Schema({
  name: String,
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
  // not too sure this'll work
  isStreamer:Boolean,
  stream_key: String,
  //stream_room: { type: Schema.Types.ObjectId, ref: 'StreamRoom', unique: true},
  stream_room: String,
  followers: Array,
  following: Array,
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

UserSchema.methods.generateStreamKey = () => {
  return shortid.generate();
};

module.exports = UserSchema = mongoose.model('User', UserSchema);
// module.exports = UserSchema;