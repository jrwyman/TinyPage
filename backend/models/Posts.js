const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postsSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    text: {
        type: String,
        required: true
    },
}, {
    timestamps: true
})

module.exports = Posts = mongoose.model('Posts', postsSchema);