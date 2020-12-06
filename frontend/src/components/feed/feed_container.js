import { connect } from 'react-redux';
import { fetchPosts } from '../../actions/post_actions';
import Feed from './feed';

const mapStateToProps = (state) => ({
  posts: Object.values(state.posts.all),
  currentUser: state.session.user,
  newPost: state.posts.new,
  errors: state.session.errors,
});

const mapDispatchToProps = (dispatch) => ({
  fetchPosts: () => dispatch(fetchPosts()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Feed);
