var mongoose = require('mongoose');

module.exports = mongoose.model('post', {
    threadId: {type: String, required: true},
    username: {type: String, required: true},
    body: {type: String, required: true},
    isFlagged: {type: Boolean, default: false},
    createdAt: {type: Date, default: Date.now},
    updatedAt: {type: Date, default: Date.now}
});