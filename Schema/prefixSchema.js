const { Schema, model } = require('mongoose');
let Schema1 = new Schema({
    Guild: String,
    Prefix: String
});
module.exports = model('prefix', Schema1)