/* eslint-disable class-methods-use-this */
/* eslint-disable no-underscore-dangle */
import React from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import PostComposeContainer from '../posts/post_compose_container';
import './feed.css';

class Feed extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

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

  handleClick(e) {
    const { addLikeToPost, fetchPosts } = this.props;
    addLikeToPost(e.target.id)
      .then(() => fetchPosts());
  }

  render() {
    const { posts } = this.props;
    return (
      <div className="feed-card">
        <h2>Your Feed</h2>
        <PostComposeContainer />
        <div className="feed-posts">
          {posts.map((post) => (
            <div className="feed-post" key={post._id}>
              <h3>{post.user.username}</h3>
              <p className="feed-post-text">{post.text}</p>
              <span className="feed-post-likes">
                <button id={post._id} onClick={this.handleClick} type="submit">{`♡ ${post.likes}`}</button>
              </span>
            </div>
          ))}
        </div>
      </div>
    );
  }
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
