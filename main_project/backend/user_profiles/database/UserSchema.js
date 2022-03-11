let mongoose = require('mongoose'),
    bcrypt = require('bcrypt-nodejs'),
    shortid = require('shortid'),
    Schema = mongoose.Schema;



let UserSchema = new Schema({
    name: String,
    username: String,
    email: String,
    password: String,
    isStreamer: Boolean,
    stream_key: String,
    stream_room: String,
    followers: Array,
    following: Array,

});


UserSchema.methods.generateHash = (password) => {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};
 
UserSchema.methods.validPassword = function(password){
    return bcrypt.compareSync(password, this.password);
};
 
UserSchema.methods.generateStreamKey = () => {
    return shortid.generate();
};
 
 
module.exports = UserSchema;
