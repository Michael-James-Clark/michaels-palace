var mongoose = require('mongoose');

module.exports = mongoose.model('thread', {
    title: {type: String, required: true},
    categoryId: {type: String, required: true},
    username: {type: String, required: true},
    body: {type: String, required: true},
    isFlagged: {type: Boolean, default: false},
    createdAt: {type: Date, default: Date.now},
    updatedAt: {type: Date, default: Date.now}
});