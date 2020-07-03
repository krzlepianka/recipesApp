const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const receipeSchema = new Schema({
    title: 
        {type: String,
        //required: [true, 'type dish title']
        },
    prepareTime: {
        type: Number,
        //required: [true, 'type prepare time']
    },
    difficulty: {
        type: String,
        //required: [true, 'type difficulty']
    },
    cuisineType: {
        type: String,
        //required: [true, 'type cuisine type']
    },
    ingredients: {
        type: [String],
        //required: [true, 'type what ingredients you need']
    },
    image: {
        data: Date,
        contentType: String  
    },
    expand: {
        type: Boolean,
        default: true
    }
})

module.exports = mongoose.model('Receipe', receipeSchema);


