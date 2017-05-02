var mongoose = require('mongoose');
module.exports = mongoose.model('user', {
    username: {type: String, unique: true, require: true},
    password: {type: String, require: true},
    email: {type: String, unique: true, require: true}
})