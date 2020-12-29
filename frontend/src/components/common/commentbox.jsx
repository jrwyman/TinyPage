import React from 'react';
import Collapsible from 'react-collapsible';
import PropTypes from 'prop-types';
import './commentbox.css';

function CommentBox({ comments }) {
  return (
    <Collapsible
      className="comments"
      openedClassName="comments-open"
      triggerWhenOpen="ⓧ"
      trigger="💬"
      triggerClassName="comments-trigger"
      triggerOpenedClassName="comments-open-trigger"
    >
      {comments.map((comment) => (
        <div className="comment">
          <div className="comment-user">{comment.username}</div>
          <div className="comment-text">{comment.text}</div>
        </div>
      ))}
    </Collapsible>
  );
}

CommentBox.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.shape({
    user_id: PropTypes.string,
    username: PropTypes.string,
    text: PropTypes.string,
  })).isRequired,
};

export default CommentBox;
