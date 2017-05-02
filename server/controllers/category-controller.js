var Category = require('../models/category-model');

module.exports.createCategory = function(req, res){
    if (!req.body.name || !req.body.description){
        return res.status(400).send('Please fill in all fields!');
    }
    var categoryData = {
        name: req.body.name,
        description: req.body.description
    }
    newCategory = new Category(categoryData);
    newCategory.save(function(err) {
        if (err){
            return res.status(500).send("Unable to save category!");
        }
        return res.status(200).send("Category has been saved!");
    });
}
module.exports.getCategories = function(req, res){
    Category.find({}, (err, categories) => {
        if (err){
            return res.status(500).send("Unable to find categories at this time.");
        }
        return res.json({categories: categories});
    })
}
module.exports.getCategory = function(req, res){
    if (!req.query.categoryid){
        return res.status(400).send("Please specify an ID");
    }
    Category.findOne({_id: req.query.categoryid}, (err, category) => {
        if (err){
            return res.status(500).send("Unable to find threads at this time");
        }
        return res.json({category: category});
    });
}
