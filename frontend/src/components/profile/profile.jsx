/* eslint-disable max-len */
/* eslint-disable no-underscore-dangle */
import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import PostComposeContainer from '../common/posts/post_compose_container';
import './profile.css';

function Profile({
  posts, newPost, currentUser, fetchUserPosts, addLikeToPost,
}) {
  const heart = '♡';

  useEffect(() => {
    fetchUserPosts(currentUser.id);
  }, [newPost]);

  const handleClick = (id) => () => {
    addLikeToPost(id)
      .then(() => fetchUserPosts(currentUser.id));
  };

  return (
    <div className="profile-card">
      <h1 className="profile-header">{currentUser.username}</h1>
      <PostComposeContainer />
      <div className="profile-posts">
        {posts.map((post) => (
          <div className="profile-post" key={post._id}>
            <p className="profile-post-text">{post.text}</p>
            <span className="profile-post-likes">
              <button className="profile-post-likes-submit" id={post._id} onClick={handleClick(post._id)} type="submit">{heart}</button>
              <div className="profile-post-likes-count">{post.likes.length}</div>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

// class Profile extends React.Component {
//   constructor(props) {
//     super(props);
//     this.handleClick = this.handleClick.bind(this);
//   }

//   componentDidMount() {
//     const { fetchUserPosts, currentUser } = this.props;
//     fetchUserPosts(currentUser.id);
//   }

//   componentDidUpdate(prevProps) {
//     const { newPost, fetchUserPosts, currentUser } = this.props;
//     if (newPost !== prevProps.newPost) {
//       fetchUserPosts(currentUser.id);
//     }
//   }

//   handleClick(e) {
//     const { addLikeToPost, fetchUserPosts, currentUser } = this.props;
//     addLikeToPost(e.target.id)
//       .then(() => fetchUserPosts(currentUser.id));
//   }

//   render() {
//     const { posts, currentUser } = this.props;
//     const heart = '♡';
//     return (
//       <div className="profile-card">
//         <h1 className="profile-header">{currentUser.username}</h1>
//         <PostComposeContainer />
//         <div className="profile-posts">
//           {posts.map((post) => (
//             <div className="profile-post" key={post._id}>
//               <p className="profile-post-text">{post.text}</p>
//               <span className="profile-post-likes">
//                 <button className="profile-post-likes-submit" id={post._id} onClick={this.handleClick} type="submit">{heart}</button>
//                 <div className="profile-post-likes-count">{post.likes.length}</div>
//               </span>
//             </div>
//           ))}
//         </div>
//       </div>
//     );
//   }
// }

Profile.propTypes = {
  posts: PropTypes.instanceOf(Array).isRequired,
  newPost: PropTypes.instanceOf(Object),
  currentUser: PropTypes.instanceOf(Object).isRequired,
  fetchUserPosts: PropTypes.func.isRequired,
  addLikeToPost: PropTypes.func.isRequired,
};

Profile.defaultProps = {
  newPost: undefined,
};

export default withRouter(Profile);
