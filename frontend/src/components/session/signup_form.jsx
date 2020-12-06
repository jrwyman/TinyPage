import React from 'react';
import { withRouter } from 'react-router-dom';
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

  componentDidUpdate() {
    if (this.props.signedIn === true) {
      this.props.history.push('/login');
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = {
      email: this.state.email,
      username: this.state.username,
      password: this.state.password,
      password2: this.state.password2,
    };

    this.props.signup(user, this.props.history);
  }

  update(field) {
    return (e) => this.setState({
      [field]: e.currentTarget.value,
    });
  }

  renderErrors() {
    if (this.props.errors) {
      return (
        <ul>
          {Object.keys(this.props.errors).map((error) => (
            <li key={`error-${error}`}>
              {this.props.errors[error]}
            </li>
          ))}
        </ul>
      );
    }
    return null;
  }

  render() {
    return (
      <div className="signup-form-container">
        <form onSubmit={this.handleSubmit}>
          <div className="signup-form">
            <input
              type="text"
              value={this.state.email}
              onChange={this.update('email')}
              placeholder="Email"
            />
            <input
              type="text"
              value={this.state.username}
              onChange={this.update('username')}
              placeholder="Username"
            />
            <input
              type="password"
              value={this.state.password}
              onChange={this.update('password')}
              placeholder="Password"
            />
            <input
              type="password"
              value={this.state.password2}
              onChange={this.update('password2')}
              placeholder="Confirm Password"
            />
            <input className="signup-submit" type="submit" value="Sign Up" />
            {this.renderErrors()}
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(SignupForm);
