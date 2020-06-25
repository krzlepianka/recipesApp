const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const receipeSchema = new Schema({
    title: String,
    ingredients: [String],
    prepareTime: String,
    level: String
})

module.exports = mongoose.model('Receipe', receipeSchema);


