const mongoose = require('mongoose')

const blogSchema = mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Title is required']
    },
    text: {
        type: String,
        required: [true, 'Text is required']
    },
    imageUrl: { type: String }
}, {
    timestamps: true
})

module.exports = mongoose.model('Blog', blogSchema)