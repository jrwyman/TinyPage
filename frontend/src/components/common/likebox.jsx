import React from 'react';
import PropTypes from 'prop-types';

function LikeBox({ likes, handleLike }) {
  const heartIcon = '♡';
  return (
    <span className="likes">
      <button
        className="likes-submit"
        onClick={handleLike}
        type="submit"
      >
        {heartIcon}
      </button>
      <div className="likes-count">{likes.length}</div>
    </span>
  );
}

LikeBox.propTypes = {
  likes: PropTypes.arrayOf(PropTypes.string).isRequired,
  handleLike: PropTypes.func.isRequired,
};

export default LikeBox;
