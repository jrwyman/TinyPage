/* eslint-disable no-debugger */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './post_compose.css';

function PostCompose({ error, composePost }) {
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const post = {
      text,
    };

    composePost(post);
    setText('');
  };

  const handleChange = (e) => {
    setText(e.currentTarget.value);
  };

  const renderError = () => {
    if (error) {
      return (
        <div>
          {error.error}
        </div>
      );
    }
    return null;
  };

  return (
    <div className="post-compose-container">
      <form onSubmit={handleSubmit}>
        <div className="post-compose-form">
          <h3>Create Post</h3>
          <textarea
            value={text}
            onChange={handleChange}
            placeholder="Write your post..."
            className="post-compose-text"
          />
          <input type="submit" value="Post" className="post-compose-submit" />
          {renderError()}
        </div>
      </form>
    </div>
  );
}

PostCompose.propTypes = {
  error: PropTypes.instanceOf(Object),
  composePost: PropTypes.func.isRequired,
};

PostCompose.defaultProps = {
  error: undefined,
};

export default PostCompose;
