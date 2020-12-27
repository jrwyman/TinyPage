const mongoose = require('mongoose');

const { Schema } = mongoose;

const postSchema = new Schema({
  user: {
    id: {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
    username: String,
  },
  text: {
    type: String,
    required: true,
  },
  likes: [{
    type: Schema.Types.ObjectId,
  }],
  username: String,
}, {
  timestamps: true,
});

const Post = mongoose.model('Post', postSchema);
module.exports = Post;
