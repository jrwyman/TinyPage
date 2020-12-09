import React from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import PostComposeContainer from '../posts/post_compose_container';
import './feed.css';

class Feed extends React.Component {
  componentDidMount() {
    const { fetchPosts } = this.props;
    fetchPosts();
  }

  componentDidUpdate(prevProps) {
    const { newPost, fetchPosts } = this.props;
    if (newPost !== prevProps.newPost) {
      fetchPosts();
    }
  }

  render() {
    const { posts } = this.props;
    if (posts.length === 0) {
      return (<div>There are no Posts</div>);
    }
    return (
      <div className="feed-card">
        <h2>Your Feed</h2>
        <PostComposeContainer />
        <div className="feed-posts">
          {posts.map((post) => (
            // eslint-disable-next-line no-underscore-dangle
            <div className="feed-post" key={post._id}>
              <h3>{post.user.username}</h3>
              <p className="feed-post-text">{post.text}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

Feed.propTypes = {
  fetchPosts: PropTypes.func.isRequired,
  posts: PropTypes.instanceOf(Array).isRequired,
  newPost: PropTypes.instanceOf(Object),
};

Feed.defaultProps = {
  newPost: undefined,
};

export default withRouter(Feed);
