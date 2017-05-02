var express = require('express');
var router = express.Router();
var auth = require('../middleware/auth');
var threadController = require('../controllers/thread-controller');
//post
router.post('/create-thread', auth, threadController.createThread);

//get
router.get('/get-threads-by-category', threadController.getThreadsByCategory);

module.exports = router;