var mongoose = require('mongoose');

const UserSchema = new mongoose.Schema(
    {
        name: { type: String },
        email: {type: String },
        password: {type: String },
    }
);

//Export the model
module.exports = mongoose.model('User', UserSchema);