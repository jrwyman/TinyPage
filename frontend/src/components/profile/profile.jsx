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
    return (
      <div className="profile-card">
        <h1 className="profile-header">{currentUser.username}</h1>
        <PostComposeContainer />
        <div className="profile-posts">
          {posts.map((post) => (
            // eslint-disable-next-line no-underscore-dangle
            <div className="profile-post" key={post._id}>
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
  newPost: PropTypes.instanceOf(Object),
  currentUser: PropTypes.instanceOf(Object).isRequired,
  fetchUserPosts: PropTypes.func.isRequired,
};

Profile.defaultProps = {
  newPost: undefined,
};

export default Profile;
