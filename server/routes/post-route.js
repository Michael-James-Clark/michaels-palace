var express = require('express');
var router = express.Router();
var auth = require('../middleware/auth');
var postController = require('../controllers/post-controller');

router.post('/create-post', auth, postController.createPost);
router.post('/reply-to-comment', auth, postController.replyToComment);
router.get('/get-posts-by-thread', postController.getPostsByThread);

module.exports = router;