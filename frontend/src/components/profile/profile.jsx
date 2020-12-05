import React from 'react';
import './profile.css';
import PostComposeContainer from '../posts/post_compose_container';

class Profile extends React.Component {
    constructor(props) {
        super(props);   
    }

    componentDidMount() {
        this.props.fetchUserPosts(this.props.currentUser.id);
    }

    componentDidUpdate(prevProps) {
        if (this.props.newPost !== prevProps.newPost) {
            this.props.fetchUserPosts(this.props.currentUser.id);
        }
    }

    render() {
        if (this.props.posts.length === 0) {
            return (<div>This user has no Posts</div>)
        } else {
            return (
                <div className="profile-card">
                    <h1 className="profile-header">{this.props.currentUser.username}</h1>
                    <PostComposeContainer />
                    <div className="profile-posts">
                        {this.props.posts.map(post => (
                            <div className="profile-post" key={post._id}>
                                <p className="profile-post-text">{post.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            );
        }
    }
}

export default Profile;