import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import './session.css';

function SignupForm({ signup, error }) {
  const [fields, setFields] = useState({
    email: '',
    username: '',
    password: '',
    password2: '',
  });

  const history = useHistory();

  const {
    email, username, password, password2,
  } = fields;

  const handleSubmit = (e) => {
    e.preventDefault();

    signup(fields, history).then((action) => {
      if (action.type === 'RECEIVE_USER_SIGN_UP') {
        history.push('/login');
      }
    });
  };

  const update = (field) => (e) => {
    setFields({
      ...fields,
      [field]: e.target.value,
    });
  };

  const renderErrors = () => {
    if (error) {
      return (
        <div>
          {error.error}
        </div>
      );
    }
    return null;
  };

  return (
    <div className="signup-form-container">
      <form onSubmit={handleSubmit}>
        <div className="signup-form">
          <input
            type="text"
            value={email}
            onChange={update('email')}
            placeholder="Email"
            autoComplete="on"
          />
          <input
            type="text"
            value={username}
            onChange={update('username')}
            placeholder="Username"
            autoComplete="on"
          />
          <input
            type="password"
            value={password}
            onChange={update('password')}
            placeholder="Password"
            autoComplete="on"
          />
          <input
            type="password"
            value={password2}
            onChange={update('password2')}
            placeholder="Confirm Password"
            autoComplete="on"
          />
          <input className="signup-submit" type="submit" value="Sign Up" />
          {renderErrors()}
        </div>
      </form>
    </div>
  );
}

SignupForm.propTypes = {
  signup: PropTypes.func.isRequired,
  error: PropTypes.instanceOf(Object),
};

SignupForm.defaultProps = {
  error: undefined,
};

export default SignupForm;
