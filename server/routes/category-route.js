var express = require('express');
var router = express.Router();
var categoryController = require('../controllers/category-controller');
var auth = require('../middleware/auth');

//post
router.post('/create-category', auth, categoryController.createCategory);

//get
router.get('/get-categories', categoryController.getCategories);
router.get('/get-category', categoryController.getCategory);
module.exports = router;