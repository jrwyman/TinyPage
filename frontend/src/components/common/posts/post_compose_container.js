import { connect } from 'react-redux';
import { composePost } from '../../../actions/post_actions';
import PostCompose from './post_compose';

const mapStateToProps = (state) => ({
  currentUser: state.session.user,
  newPost: state.posts.new,
  errors: state.posts.errors,
});

const mapDispatchToProps = (dispatch) => ({
  composePost: (data) => dispatch(composePost(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PostCompose);