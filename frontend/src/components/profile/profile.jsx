import React from 'react';
import PropTypes from 'prop-types';
import PostComposeContainer from '../posts/post_compose_container';
import './profile.css';

class Profile extends React.Component {
  componentDidMount() {
    const { fetchUserPosts, currentUser } = this.props;
    fetchUserPosts(currentUser.id);
  }

  componentDidUpdate(prevProps) {
    const { newPost, fetchUserPosts, currentUser } = this.props;
    if (newPost !== prevProps.newPost) {
      fetchUserPosts(currentUser.id);
    }
  }

  render() {
    const { posts, currentUser } = this.props;
    if (posts.length === 0) {
      return (<div>This user has no Posts</div>);
    }
    return (
      <div className="profile-card">
        <h1 className="profile-header">{currentUser.username}</h1>
        <PostComposeContainer />
        <div className="profile-posts">
          {posts.map((post) => (
            <div className="profile-post" key={post.id}>
              <p className="profile-post-text">{post.text}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

Profile.propTypes = {
  posts: PropTypes.instanceOf(Array).isRequired,
  newPost: PropTypes.instanceOf(Object).isRequired,
  currentUser: PropTypes.instanceOf(Object).isRequired,
  fetchUserPosts: PropTypes.func.isRequired,
};

export default Profile;
