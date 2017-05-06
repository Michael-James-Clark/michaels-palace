var mongoose = require('mongoose');
var Schema = mongoose.Schema;

let replySchema = new Schema({
    name: {type: String},
    reply: {type: String},
    isFlagged: {type: Boolean, default: false}
});

module.exports = replySchema;

