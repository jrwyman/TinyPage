import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Collapsible from 'react-collapsible';
import PropTypes from 'prop-types';
import { addCommentToPost } from '../../actions/post_actions';

import './commentbox.css';

function CommentBox({ fetchPosts, post, comments }) {
  const { _id: postId } = post;

  const [commentText, setCommentText] = useState('');

  const dispatch = useDispatch();

  const trigger = (
    <div className="comments-trigger">
      <div className="comments-trigger-icon">💬</div>
      <div className="comments-count">{comments.length}</div>
    </div>
  );

  const handleChange = (e) => {
    setCommentText(e.target.value);
  };

  const handleComment = async (e) => {
    e.preventDefault();
    await dispatch(addCommentToPost(postId, commentText));
    fetchPosts();
  };

  return (
    <Collapsible
      className="comments-collapsible"
      openedClassName="comments-open-collapsible"
      triggerWhenOpen="ⓧ"
      trigger={trigger}
      triggerOpenedClassName="comments-open-trigger"
    >
      <form className="comment-form" onSubmit={handleComment}>
        <input className="comment-input" value={commentText} onChange={handleChange} placeholder="Write your comment" type="text" />
        <input className="comment-submit" type="submit" value="Post" />
      </form>
      {comments.map((comment) => (
        <div key={comment.text} className="comment">
          <div className="comment-user">{comment.username}</div>
          <div className="comment-text">{comment.text}</div>
        </div>
      ))}
    </Collapsible>
  );
}

CommentBox.propTypes = {
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
  comments: PropTypes.arrayOf(PropTypes.shape({
    user_id: PropTypes.string,
    username: PropTypes.string,
    text: PropTypes.string,
  })).isRequired,
  fetchPosts: PropTypes.func.isRequired,
};

export default CommentBox;
