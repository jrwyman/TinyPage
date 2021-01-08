import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { login } from '../../actions/session_actions';
import './login.css';

function LoginForm() {
  const error = useSelector((state) => state.session.error);

  const dispatch = useDispatch();

  const [fields, setFields] = useState({ email: '', password: '' });
  const { email, password } = fields;

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login(fields));
  };

  const handleChange = (field) => (e) => {
    setFields({
      ...fields,
      [field]: e.target.value,
    });
  };

  const renderError = () => {
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
    <div className="login-form-container">
      <form onSubmit={handleSubmit}>
        <div className="login-form">
          <input
            type="text"
            value={email}
            onChange={handleChange('email')}
            placeholder="Email"
            autoComplete="on"
          />
          <input
            type="password"
            value={password}
            onChange={handleChange('password')}
            placeholder="Password"
            autoComplete="on"
          />
          <input className="login-submit" type="submit" value="Log In" />
          {renderError()}
        </div>
      </form>
    </div>
  );
}

export default LoginForm;
