import React from 'react';
import { withRouter } from 'react-router-dom';
import './feed.css';
import PostComposeContainer from '../posts/post_compose_container';

class Feed extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            posts: []
        }
    }

    componentWillMount() {
        this.props.fetchPosts();
    }

    componentWillReceiveProps(newState) {
        this.setState({ posts: newState.posts });
    }

    render() {
        if (this.state.posts.length === 0) {
            return (<div>There are no Posts</div>)
        } else {
            return (
                <div className="feed-card">
                    <h2>Your Feed</h2>
                    <PostComposeContainer />
                    <div className="feed-posts">
                        {this.state.posts.map(post => (
                            <div className="feed-post" key={post._id}>
                                <h3>{post.user.username}</h3>
                                <p className="feed-post-text">{post.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            )
        }
    }
}

export default withRouter(Feed);