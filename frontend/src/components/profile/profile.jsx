/* eslint-disable no-underscore-dangle */
import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import PostComposeContainer from '../common/posts/post_compose_container';
import Post from '../common/posts/post';
import './profile.css';

function Profile({
  posts, newPost, currentUser, fetchUserPosts, addLikeToPost,
}) {
  useEffect(() => {
    fetchUserPosts(currentUser.id);
  }, [newPost]);

  const handleLike = (id) => () => {
    addLikeToPost(id)
      .then(() => fetchUserPosts(currentUser.id));
  };

  return (
    <div className="profile">
      <h2 className="profile-header">{`${currentUser.username}'s Profile`}</h2>
      <PostComposeContainer />
      <div className="profile-posts">
        {posts.map((post) => (
          <Post handleLike={handleLike(post._id)} post={post} />
        ))}
      </div>
    </div>
  );
}

Profile.propTypes = {
  posts: PropTypes.instanceOf(Array).isRequired,
  newPost: PropTypes.instanceOf(Object),
  currentUser: PropTypes.instanceOf(Object).isRequired,
  fetchUserPosts: PropTypes.func.isRequired,
  addLikeToPost: PropTypes.func.isRequired,
};

Profile.defaultProps = {
  newPost: undefined,
};

export default withRouter(Profile);
