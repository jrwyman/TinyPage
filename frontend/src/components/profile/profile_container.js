import { connect } from 'react-redux';
import { fetchUserPosts, addLikeToPost } from '../../actions/post_actions';
import Profile from './profile';

const mapStateToProps = (state) => ({
  userPosts: state.posts.userPosts,
  newPost: state.posts.new,
  currentUser: state.session.user,
});

const mapDispatchToProps = (dispatch) => ({
  fetchUserPosts: (id) => dispatch(fetchUserPosts(id)),
  addLikeToPost: (id) => dispatch(addLikeToPost(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
