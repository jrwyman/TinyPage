import React from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const { email, password } = this.state;
    const { login } = this.props;
    const user = {
      email,
      password,
    };
    login(user);
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
    const { email, password } = this.state;
    return (
      <div className="login-form-container">
        <form onSubmit={this.handleSubmit}>
          <div className="login-form">
            <input
              type="text"
              value={email}
              onChange={this.update('email')}
              placeholder="Email"
              autoComplete="on"
            />
            <input
              type="password"
              value={password}
              onChange={this.update('password')}
              placeholder="Password"
              autoComplete="on"
            />
            <input className="login-submit" type="submit" value="Log In" />
            {this.renderErrors()}
          </div>
        </form>
      </div>
    );
  }
}

LoginForm.propTypes = {
  errors: PropTypes.instanceOf(Object),
  login: PropTypes.func.isRequired,
};

LoginForm.defaultProps = {
  errors: undefined,
};

export default withRouter(LoginForm);
