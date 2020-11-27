import React from 'react';
import './profile.css';

class Profile extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            posts: []
        }
    }

    componentWillMount() {
        this.props.fetchUserPosts(this.props.currentUser.id);
    }

    componentWillReceiveProps(newState) {
        this.setState({ posts: newState.posts });
    }

    render() {
        if (this.state.posts.length === 0) {
            return (<div>This user has no Posts</div>)
        } else {
            return (
                <div className="profile-card">
                    <h1 className="profile-header">{this.props.currentUser.username}</h1>
                    <ul>
                        {this.state.posts.map(post => (
                            <div className="profile-post-text" key={post._id}>
                                <li>{post.text}</li>
                            </div>
                        ))}
                    </ul>
                </div>
            );
        }
    }
}

export default Profile;