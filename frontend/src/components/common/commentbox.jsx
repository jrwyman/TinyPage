import React from 'react';
import Collapsible from 'react-collapsible';
import PropTypes from 'prop-types';
import './commentbox.css';

function CommentBox({ comments }) {
  const trigger = (
    <div className="comments-trigger">
      <div className="comments-trigger-icon">💬</div>
      <div className="comments-count">{comments.length}</div>
    </div>
  );

  return (
    <Collapsible
      className="comments-collapsible"
      openedClassName="comments-open-collapsible"
      triggerWhenOpen="ⓧ"
      trigger={trigger}
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
