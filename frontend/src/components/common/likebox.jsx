import React from 'react';
import PropTypes from 'prop-types';
import './likebox.css';

function LikeBox({ likes, handleLike }) {
  return (
    <div className="likes">
      <button
        className="likes-submit"
        onClick={handleLike}
        type="submit"
      >
        🤍
      </button>
      <div className="likes-count">{likes.length}</div>
    </div>
  );
}

LikeBox.propTypes = {
  likes: PropTypes.arrayOf(PropTypes.string).isRequired,
  handleLike: PropTypes.func.isRequired,
};

export default LikeBox;
