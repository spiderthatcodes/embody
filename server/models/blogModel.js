import mongoose, {Schema} from 'mongoose'

const blogSchema = new Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User',
    },
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

export default mongoose.model('Blog', blogSchema)