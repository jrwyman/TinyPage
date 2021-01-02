import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './post_compose.css';

function PostCompose({ errors, composePost }) {
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

  const renderErrors = () => {
    if (errors) {
      return (
        <ul>
          {Object.keys(errors).map((error) => (
            <li key={`error-${error}`}>
              {error}
            </li>
          ))}
        </ul>
      );
    }
    return null;
  };

  return (
    <div className="post-compose-card">
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
          {renderErrors()}
        </div>
      </form>
    </div>
  );
}

PostCompose.propTypes = {
  errors: PropTypes.instanceOf(Array).isRequired,
  composePost: PropTypes.func.isRequired,
};

export default PostCompose;
