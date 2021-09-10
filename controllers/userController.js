const User = require('../models/user');
const async = require('async');

exports.index = function(req, res, next) {
    
    User.find()
    .populate('user')
    .exec(function (err, results) {
        if (err) { return next(err); }
        //Successful so render
        res.render('user_index', { title: 'User Home', error: err, data: results });
    })
};

//Display list of all Users
exports.user_list = (req, res) => {

    User.find((err, docs) => {
        res.render('user_list', { title: 'List of Users', users: docs });
    });

    //User.find()
    //.populate('user')
    //.exec(function (err, list_users) {
        //if (err) {return next(err); }
        //Successful so render
        //res.render('user_index', { title: 'List of Active Users', user_list: list_users });
    //});
};


//Display detail page of a specific User
exports.user_detail = function(req, res) {
    res.send('User Detail: ' + req.params.id);
};

//Display User create on GET
exports.user_create_get = function(req, res) {
    res.send('something');
};

//Display User create on POST
exports.user_create_post = function(req, res) {
    res.send('User create on POST');
};

//Display User delete on GET
exports.user_delete_get = function(req, res, next) {
    User.findById(req.params.id).exec
};

//Display User delete on POST
exports.user_delete_post = function(req, res) {
    res.send('User delete on POST');
};

//Display User update on GET
exports.user_update_get = function(req, res) {
    res.send('User update on GET');
};

//Display User update on POST
exports.user_update_post = function(req, res) {
    res.send('User update on POST') 
}