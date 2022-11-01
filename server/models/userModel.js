import mongoose, {Schema} from 'mongoose'

const userSchema = new Schema({
    username: {
        type: String,
        required: [true, 'Name is required'],
        unique: true
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        unique: true
    },
    password: {
        type: String,
        required: [true, 'Password is required']
    },
    role: {
        type: String,
        required: true
    },
}, 
{
    timestamps: true
}
)

export default mongoose.model('User', userSchema)
