var mongoose = require('mongoose');

var StreamRoomSchema = new mongoose.Schema({
    // identified by ObjectId _id
    host: { type: mongoose.Schema.Types.ObjectId, ref: 'User', unique: true},
    title: String,
    moderators: [
        {type: Schema.Types.ObjectId, ref: 'User'}
    ]
  });

module.exports = mongoose.model('StreamRoom', StreamRoomSchema);