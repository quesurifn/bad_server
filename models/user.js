var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var UserSchema = new Schema(
    {
        name: { type: String },
        //email: { type: String },
        //likes: { type: String },
        //dislikes: { type: String },
    }
);

//Virtual for User's URL
UserSchema
.virtual('url')
.get(function() {
    return '/users/user' + this._id;
});

//Export the model
module.exports = mongoose.model('User', UserSchema);