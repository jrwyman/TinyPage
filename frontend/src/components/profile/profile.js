import React from 'react';

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
                <div>
                    <h2>My Posts</h2>
                    {this.state.posts.map(post => (
                        <li key={post._id}>{post.text}</li> 
                    ))}
                </div>
            );
        }
    }
}

export default Profile;