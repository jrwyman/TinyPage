import { connect } from 'react-redux';
import { fetchPosts, addLikeToPost } from '../../actions/post_actions';
import Feed from './feed';

const mapStateToProps = (state) => ({
  posts: Object.values(state.posts.all),
  currentUser: state.session.user,
  newPost: state.posts.new,
  errors: state.posts.errors,
});

const mapDispatchToProps = (dispatch) => ({
  fetchPosts: () => dispatch(fetchPosts()),
  addLikeToPost: (id) => dispatch(addLikeToPost(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Feed);
