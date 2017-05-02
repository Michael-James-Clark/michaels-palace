var express = require('express');
var router = express.Router();
var userController = require('../controllers/user-controller.js');
//post routes
router.post('/create-user', userController.createUser);
router.post('/login-user', userController.loginUser);
//get routes
router.get('/get-user', userController.getUser);
module.exports = router;