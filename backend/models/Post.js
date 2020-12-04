const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema({
    user: {
        id: {
            type: Schema.Types.ObjectId,
            ref: 'User'
        },
        username: String
    },
    text: {
        type: String,
        required: true
    },
    username: String
}, {
    timestamps: true
})

module.exports = Post = mongoose.model('Post', postSchema);