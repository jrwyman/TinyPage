/* eslint-disable no-underscore-dangle */
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import PostComposeContainer from '../common/posts/post_compose_container';
import { fetchUserPosts } from '../../actions/post_actions';
import Post from '../common/posts/post';
import './profile.css';

function Profile({
  userPosts, newPost, currentUser,
}) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUserPosts(currentUser.id));
  }, [newPost]);

  const handleFetchUserPosts = () => dispatch(fetchUserPosts(currentUser.id));

  return (
    <div className="profile">
      <h2 className="profile-header">{`${currentUser.username}'s Profile`}</h2>
      <PostComposeContainer />
      <div className="profile-posts">
        {userPosts.map((post) => (
          <Post fetchPosts={handleFetchUserPosts} post={post} />
        ))}
      </div>
    </div>
  );
}

Profile.propTypes = {
  userPosts: PropTypes.instanceOf(Array).isRequired,
  newPost: PropTypes.instanceOf(Object),
  currentUser: PropTypes.instanceOf(Object).isRequired,
};

Profile.defaultProps = {
  newPost: undefined,
};

export default Profile;
