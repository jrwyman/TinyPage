const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postsSchema = new Schema({
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

module.exports = Posts = mongoose.model('Posts', postsSchema);