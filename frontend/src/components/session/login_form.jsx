import React from 'react';
import { withRouter } from 'react-router-dom';

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

    const user = {
      email: this.state.email,
      password: this.state.password,
    };
    this.props.login(user);
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
    return (
      <div className="login-form-container">
        <form onSubmit={this.handleSubmit}>
          <div className="login-form">
            <input
              type="text"
              value={this.state.email}
              onChange={this.update('email')}
              placeholder="Email"
            />
            <input
              type="password"
              value={this.state.password}
              onChange={this.update('password')}
              placeholder="Password"
            />
            <input className="login-submit" type="submit" value="Log In" />
            {this.renderErrors()}
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(LoginForm);
