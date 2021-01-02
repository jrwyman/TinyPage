import { connect } from 'react-redux';
import { login } from '../../actions/session_actions';
import LoginForm from './login_form';

const mapStateToProps = (state) => ({
  currentUser: state.session.user,
  error: state.session.error,
});

const mapDispatchToProps = (dispatch) => ({
  login: (user) => dispatch(login(user)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LoginForm);
