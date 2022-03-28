let mongoose = require('mongoose');

exports.User = mongoose.model('User', require('./UserSchema'));
exports.StreamRoom = mongoose.model('StreamRoom', require('./StreamRoomSchema'));