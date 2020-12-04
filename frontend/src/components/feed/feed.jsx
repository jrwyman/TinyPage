import React from 'react';
import { withRouter } from 'react-router-dom';
import './feed.css';
import PostComposeContainer from '../posts/post_compose_container';

class Feed extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchPosts();
    }

    componentDidUpdate(prevProps) {
        if (this.props.newPost !== prevProps.newPost) {
            this.props.fetchPosts();
        }
    }

    render() {
        const { posts } = this.props;
        if (posts.length === 0) {
            return (<div>There are no Posts</div>)
        } else {
            return (
                <div className="feed-card">
                    <h2>Your Feed</h2>
                    <PostComposeContainer />
                    <div className="feed-posts">
                        {posts.map(post => (
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