var express = require('express');
var router = express.Router();

//Require controller modules
const user_controller = require('../controllers/userController');

/* GET users listing. */
//router.get('/', function(req, res, next) {
  //res.send('respond with a resource');
//});

//GET Users Home Page
router.get('/', user_controller.index);

//GET request for Creating a User ***THIS HAS TO COME BEFORE ANY ROUTES THAT DISPLAY USER ID****
router.get('/user/create', user_controller.user_create_get);

//POST request for creating User
router.post('/user/create', user_controller.user_create_post);

//GET request for deleting a User
router.get('/user/:id/delete', user_controller.user_delete_get);

//POST request for deleting a User
router.post('/user/:id/delete', user_controller.user_delete_post);

//GET request for updating a User
router.get('/user/:id/update', user_controller.user_update_get);

//POST request for updating a User
router.post('/user/:id/update', user_controller.user_update_post);

//GET request for one User aka User DETAIL
router.get('/user/:id', user_controller.user_detail)

//GET request for list of Users
router.get('/users', user_controller.user_list);

module.exports = router;
