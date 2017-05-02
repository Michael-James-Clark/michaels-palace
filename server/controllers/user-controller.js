var User = require('../models/user-model');
var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');

/*
    We start off by checking if the user filled in both fields, if not we send out an error message.
    - We create an object with the information received, and then hash the password. 
    - After hasing the password, we create a new mongoose model and save it.
*/
module.exports.createUser = function(req, res){
    if(!req.body.email || !req.body.username || !req.body.password){
        return res.status(500).send('Please fill in all fields!');
    }
    var userData = {
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
    }
    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(userData.password, salt, (err, hash) => {
            if (err) {
                throw err;
            }
            userData.password = hash;
            newUser = new User(userData);
            newUser.save((err, result) => {
                if (err) {
                    throw err;
                }
                return res.json({success: true, msg: "Account has been registered!"});
            });
        });
    });
}

/*
    We start off by checking if all fields are filled in.
    - We then query mongoDB, checking if either the email or username exists.
    - We then store the first index of the returned array into a variable called loggedUser.
    - Compare password against our hashed password.
    - If the password is matched we encode the loggedUser object into a JWT.
    - We then finish by returning the object to the requester, in JSON format.
*/
module.exports.loginUser = function(req, res){
    if (!req.body.login || !req.body.password){
        return res.status(400).send("Please fill in all fields!");
    }
    User.find({$or: [{username: req.body.login}, {email: req.body.login}]}, (err, user) => {
        if (err) {
            return res.status(500).send("Invalid details, or the user doesn't exist!");
        }
        if (user.length < 1){
            return res.status(400).send("Invalid details, or the user doesn't exist!");
        }
        var loggedUser = user[0];
        bcrypt.compare(req.body.password, loggedUser.password, function(err, isMatch) {
            if (err) {
                throw err;    
            }
            if (!isMatch){
                return res.status(400).send("Invalid details, or the user doesn't exist!");
            }
            loggedUser.password = "removed";
            var token = jwt.sign(loggedUser, process.env.APP_SECRET, {expiresIn: 60 * 60 * 24 * 1000});
            return res.json({
                success: true,
                user: loggedUser,
                token: token
            });

        });
    });
}
module.exports.getUser = function(req, res){
  
}