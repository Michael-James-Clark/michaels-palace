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
    newThread.save((err, thread) => {
        if (err){
            return res.status(500).send("Unable to save at this time!");
        }
        return res.json({thread: thread});
    });
}
module.exports.getThreadsByCategory = function(req, res){
    if (!req.query.categoryid){
        return res.status(400).send("Please specify an ID");
    }
    Thread.find({categoryId: req.query.categoryid}, (err, threads) => {
        if (err){
            return res.status(500).send("Unable to find threads at this time");
        }
        return res.json({threads: threads});
    });
}

module.exports.getThreads = function(req, res){
    let query = {};
    if (req.query.thread){
        query = {_id:req.query.thread}
    }
    Thread.find(query).limit(3).sort({createdAt: -1}).exec((err, threads) => {
        if (err){
            return res.status(500).send("Unable to find threads at this time");
        }
        return res.json({threads: threads});
    });
}

