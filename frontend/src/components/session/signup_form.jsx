import React from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import './session.css';

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      username: '',
      password: '',
      password2: '',
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.clearedErrors = false;
  }

  handleSubmit(e) {
    const {
      email, username, password, password2,
    } = this.state;
    const { history, signup } = this.props;
    e.preventDefault();
    const user = {
      email,
      username,
      password,
      password2,
    };

    signup(user, history).then((action) => {
      if (action.type === 'RECEIVE_USER_SIGN_UP') {
        history.push('/login');
      }
    });
  }

  update(field) {
    return (e) => this.setState({
      [field]: e.currentTarget.value,
    });
  }

  renderErrors() {
    const { errors } = this.props;
    if (errors) {
      return (
        <ul>
          {Object.keys(errors).map((error) => (
            <li key={`error-${error}`}>
              {errors[error]}
            </li>
          ))}
        </ul>
      );
    }
    return null;
  }

  render() {
    const {
      email, username, password, password2,
    } = this.state;
    return (
      <div className="signup-form-container">
        <form onSubmit={this.handleSubmit}>
          <div className="signup-form">
            <input
              type="text"
              value={email}
              onChange={this.update('email')}
              placeholder="Email"
              autoComplete="on"
            />
            <input
              type="text"
              value={username}
              onChange={this.update('username')}
              placeholder="Username"
              autoComplete="on"
            />
            <input
              type="password"
              value={password}
              onChange={this.update('password')}
              placeholder="Password"
              autoComplete="on"
            />
            <input
              type="password"
              value={password2}
              onChange={this.update('password2')}
              placeholder="Confirm Password"
              autoComplete="on"
            />
            <input className="signup-submit" type="submit" value="Sign Up" />
            {this.renderErrors()}
          </div>
        </form>
      </div>
    );
  }
}

SignupForm.propTypes = {
  signup: PropTypes.func.isRequired,
  errors: PropTypes.instanceOf(Object),
  history: PropTypes.instanceOf(Object).isRequired,
};

SignupForm.defaultProps = {
  errors: undefined,
};

export default withRouter(SignupForm);
