var Thread = require('../models/thread-model');
module.exports.createThread = function(req, res){
    if(!req.body.title || !req.body.categoryId || !req.body.body){
        return res.status(400).send("Fill in all fields!");
    }
    var threadData = {
        title: req.body.title,
        categoryId: req.body.categoryId,
        username: req.user._doc.username,
        body: req.body.body
    }
    var newThread = new Thread(threadData);
    newThread.save((err) => {
        if (err){
            return res.status(500).send("Unable to save at this time!");
        }
        return res.status(200).send("A new thread was created!");
    });
}
module.exports.getThreadsByCategory = function(req, res){
    if (!req.query.categoryId){
        return res.status(400).send("Please specify an ID");
    }
    Thread.find({categoryId: req.query.categoryId}, (err, threads) => {
        if (err){
            return res.status(500).send("Unable to find threads at this time");
        }
        return res.json({threads: threads});
    });
}