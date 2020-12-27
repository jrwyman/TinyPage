import React from 'react';
import PropTypes from 'prop-types';
import LikeBox from '../likebox';

function Post({ post, handleLike }) {
  const {
    user: { username }, _id: postId, text, likes,
  } = post;
  return (
    <div className="feed-post" key={postId}>
      <h3>{username}</h3>
      <p className="feed-post-text">{text}</p>
      <LikeBox likes={likes} handleLike={handleLike} />
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
  }).isRequired,
  handleLike: PropTypes.func.isRequired,
};

export default Post;
