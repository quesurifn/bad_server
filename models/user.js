const mongoose = require('mongoose');
const bcrypt = require('bcryptjs')

const UserSchema = new mongoose.Schema(
    {
        name: { type: String },
        email: {type: String },
        password: {type: String },
    }
);

// UserSchema.pre is a mongoose middleware. A middle ware is just something that gets called in-between two methods. In this case the method literally translates to pre-save or before every save to mongodb we run this function
UserSchema.pre('save', async (next) => {
    // because this is a method on user schema, we can call the keyword this. `this` refers to this object in this case being user schema so
    // this.password means UserSchema.password but we use this because we're assigning to password within a method on the user schema

    // So below we are taking the value in password, encrypting it and then re-assigning it to password. The random number helps the computer encrypt it better
    this.password = await bcrypt.hash(this.password, 123012313123)

    next(null)
})

//Export the model
module.exports = mongoose.model('User', UserSchema);