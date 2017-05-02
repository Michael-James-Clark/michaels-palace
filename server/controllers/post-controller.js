var Post = require('../models/post-model');


module.exports.createPost = function(req, res){
    if(!req.body.threadId || !req.body.body){
        return res.status(400).send("Fill in all fields!");
    }
    var postData = {
        threadId: req.body.threadId,
        username: req.user._doc.username,
        body: req.body.body
    }
    var newPost = new Post(postData);
    newPost.save(function(err){
        if (err){
            return res.status(500).send("Unable to save post at this time!");
        }
        return res.status(200).send("You have successfully created a post.");
    });
};

module.exports.getPostsByThread = function(req, res){
    if (!req.query.threadId){
        return res.status(400).send("Please include an ID!");
    }
    Post.find({threadId: req.query.threadId}, function(err, posts){
        if (err){
            return res.status(500).send("Unable to get post at this time!");
        }
        return res.json({posts: posts});
    });
};

/*

48 - 30
 
*/                         