const User = require('../models/user');
// const async = require('async');
// We don't need this library anymore. In most recent JS versions Async / await uses keywords

// => removes req for function keyword; async allows await
exports.index = async (_req, res) => {
    // We're not using req so we prefix it with _
    const users = await User.find({})
    // We use json not res.render because we're not doing views. Only building a json api
    res.json(users)
};


//Create User
exports.create = async (req, res) => {
    const user = await User.create(req.body)
    res.json(user)
};

// Get user by user id
exports.get = async (req, res) => {
    // since :id is in the router path we can do req.prams.id
    const user = await User.findById(req.params.id)
    res.json(user)
};

//Display User delete on GET
exports.update = async (req, res) => {
    const user = await User.updateOne({_id: req.body._id}, req.body)
    res.json(user)
};

//Display User delete on POST
exports.delete = async (req, res) => {
    // since :id is in the router path we can do req.prams.id
    const user = await User.deleteOne({_id: req.params.id})
    res.json(user)
};