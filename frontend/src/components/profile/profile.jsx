import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import PostCompose from '../common/posts/post_compose';
import { fetchUserPosts } from '../../actions/post_actions';
import Post from '../common/posts/post';
import './profile.css';

function Profile() {
  const userPosts = useSelector((state) => state.posts.userPosts);
  const newPost = useSelector((state) => state.posts.new);
  const currentUser = useSelector((state) => state.session.user);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUserPosts(currentUser.id));
  }, [newPost]);

  const handleFetchUserPosts = () => dispatch(fetchUserPosts(currentUser.id));

  return (
    <div className="profile">
      <h2 className="profile-header">{`${currentUser.username}'s Profile`}</h2>
      <PostCompose />
      <div className="profile-posts">
        {userPosts.map((post) => (
          <Post key={post.text} fetchPosts={handleFetchUserPosts} post={post} />
        ))}
      </div>
    </div>
  );
}

export default Profile;
