const express = require('express');
const StreamRoomSchema = require('../models/StreamRoomSchema');
const router = express.Router();
User = require('../models/Schema').User
StreamRoom = require('../models/Schema').StreamRoom

// used to make a user into a streamer
// precondition: user in req (i.e. signed in)
router.post('/', function(req, res, next) {
    var room = new StreamRoom();
    room.host = req.user
    room.title = null;
    room.moderators = [];
    // var key = req.user.generateStreamKey(); // not sure what this does
    console.log(room);
    console.log(req.user._id);
    User.updateOne({'_id': req.user._id}, { $set: {isStreamer: true, stream_room: room} }).exec();
    res.redirect('/users');
});

module.exports = router;