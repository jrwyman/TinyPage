import { connect } from 'react-redux';

import { fetchPosts, addLikeToPost } from '../../actions/post_actions';
import Feed from './feed';

const mapStateToProps = (state) => ({
  posts: state.posts.all,
  currentUser: state.session.user,
  newPost: state.posts.new,
  error: state.posts.error,
});

const mapDispatchToProps = (dispatch) => ({
  fetchPosts: () => dispatch(fetchPosts()),
  addLikeToPost: (id) => dispatch(addLikeToPost(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Feed);
