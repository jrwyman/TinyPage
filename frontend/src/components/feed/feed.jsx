/* eslint-disable no-debugger */
/* eslint-disable class-methods-use-this */
/* eslint-disable no-underscore-dangle */
import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import PostComposeContainer from '../common/posts/post_compose_container';
import Post from '../common/posts/post';
import './feed.css';

function Feed({
  fetchPosts, addLikeToPost, newPost, posts,
}) {
  useEffect(() => {
    fetchPosts();
  }, [newPost]);

  const handleLike = (id) => () => {
    addLikeToPost(id)
      .then(() => fetchPosts());
  };

  return (
    <div className="feed">
      <h2>Your Feed</h2>
      <PostComposeContainer />
      <div className="feed-posts">
        {posts.map((post) => (
          <Post handleLike={handleLike(post._id)} post={post} />
        ))}
      </div>
    </div>
  );
}

Feed.propTypes = {
  fetchPosts: PropTypes.func.isRequired,
  addLikeToPost: PropTypes.func.isRequired,
  posts: PropTypes.instanceOf(Array).isRequired,
  newPost: PropTypes.instanceOf(Object),
};

Feed.defaultProps = {
  newPost: undefined,
};

export default withRouter(Feed);
