import React from 'react';
import { withRouter } from 'react-router-dom';
import './posts.css';

class Post extends React.Component {
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
                <div className="posts-card">
                    <h2 className="posts-header">All Posts</h2>
                    <ul>
                        {this.state.posts.map(post => (
                            <div className="posts-post-text" key={post._id}>
                                <h3>{post.user.username}</h3>
                                <li>{post.text}</li>
                            </div>
                        ))}
                    </ul>
                </div>
            );
        }
    }
}

export default withRouter(Post);