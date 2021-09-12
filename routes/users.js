var express = require('express');
var router = express.Router();

//Require controller modules
const user_controller = require('../controllers/userController');

/* GET users listing. */
//router.get('/', function(req, res, next) {
  //res.send('respond with a resource');
//});

//Route is actually /users/ see app.js line 
router.get('/', user_controller.index);

//POST generally means create
router.post('/', user_controller.create);

//PUT generally means update
router.put('/', user_controller.update);

//GET by id
router.get('/:id', user_controller.get);

//POST request for deleting a User
router.delete('/:id', user_controller.delete);

module.exports = router;
