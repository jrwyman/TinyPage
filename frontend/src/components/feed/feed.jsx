import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import PostCompose from '../common/posts/post_compose';
import { fetchPosts } from '../../actions/post_actions';
import Post from '../common/posts/post';
import './feed.css';

function Feed() {
  const posts = useSelector((state) => state.posts.all);
  const newPost = useSelector((state) => state.posts.new);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts());
  }, [newPost]);

  const handleFetchPosts = () => dispatch(fetchPosts());

  return (
    <div className="feed">
      <h2 className="profile-header">Your Feed</h2>
      <PostCompose />
      <div className="feed-posts">
        {posts.map((post) => (
          <Post fetchPosts={handleFetchPosts} post={post} />
        ))}
      </div>
    </div>
  );
}

export default Feed;
