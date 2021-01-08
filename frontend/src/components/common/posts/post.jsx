/* eslint-disable no-debugger */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import { addLikeToPost, addCommentToPost } from '../../../actions/post_actions';
import LikeBox from '../likebox';
import CommentBox from '../commentbox';
import './post.css';

function Post({ post, fetchPosts }) {
  const {
    user: { username }, _id: postId, text, likes, comments,
  } = post;

  const dispatch = useDispatch();

  const [commentText, setCommentText] = useState('');

  const handleLike = async () => {
    await dispatch(addLikeToPost(postId));
    fetchPosts();
  };

  const handleChange = (e) => {
    setCommentText(e.target.value);
  };

  const handleComment = async (e) => {
    e.preventDefault();
    await dispatch(addCommentToPost(postId, commentText));
    fetchPosts();
  };

  return (
    <div className="post" key={postId}>
      <h3>{username}</h3>
      <p className="post-text">{text}</p>
      <div className="post-actions">
        <CommentBox comments={comments} />
        <LikeBox likes={likes} handleLike={handleLike} />
        <form onSubmit={handleComment}>
          <input value={commentText} onChange={handleChange} placeholder="Write your comment" type="text" />
          <input type="submit" value="Post" />
        </form>
      </div>
    </div>
  );
}

Post.propTypes = {
  post: PropTypes.shape({
    user: PropTypes.shape({
      username: PropTypes.string,
    }),
    _id: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    likes: PropTypes.arrayOf(PropTypes.string).isRequired,
    comments: PropTypes.arrayOf(PropTypes.shape({
      user_id: PropTypes.string,
      username: PropTypes.string,
      text: PropTypes.string,
    })),
  }).isRequired,
  fetchPosts: PropTypes.func.isRequired,
};

export default Post;
