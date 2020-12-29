/* eslint-disable no-debugger */
/* eslint-disable class-methods-use-this */
/* eslint-disable no-underscore-dangle */
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import PostComposeContainer from '../common/posts/post_compose_container';
import { fetchPosts } from '../../actions/post_actions';
import Post from '../common/posts/post';
import './feed.css';

function Feed({
  newPost, posts,
}) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts());
  }, [newPost]);

  const handleFetchPosts = () => dispatch(fetchPosts());

  return (
    <div className="feed">
      <h2 className="profile-header">Your Feed</h2>
      <PostComposeContainer />
      <div className="feed-posts">
        {posts.map((post) => (
          <Post fetchPosts={handleFetchPosts} post={post} />
        ))}
      </div>
    </div>
  );
}

Feed.propTypes = {
  posts: PropTypes.instanceOf(Array).isRequired,
  newPost: PropTypes.instanceOf(Object),
};

Feed.defaultProps = {
  newPost: undefined,
};

export default Feed;
