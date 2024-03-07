const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const blogSchema = new Schema({
    title: {
        type: String,
        required: true,
        maxLength: 20,
    },
    description: {
        type: String,
        required: true,
        maxLength: 100
    },
    likes: {
        type: Boolean,
        required: true,
        default: false,
    },
    comments: [{
        type: String,
        maxLength: 100,
    }]
})

module.exports = mongoose.model('blogdB', blogSchema);