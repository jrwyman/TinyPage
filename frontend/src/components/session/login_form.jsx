import React, { useState } from 'react';
import PropTypes from 'prop-types';

function LoginForm({ errors, login }) {
  const [fields, setFields] = useState({ email: '', password: '' });
  const { email, password } = fields;

  const handleSubmit = (e) => {
    e.preventDefault();
    login(fields);
  };

  const handleChange = (field) => (e) => {
    setFields({
      ...fields,
      [field]: e.target.value,
    });
  };

  const renderErrors = () => {
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
          {renderErrors()}
        </div>
      </form>
    </div>
  );
}

LoginForm.propTypes = {
  errors: PropTypes.instanceOf(Object),
  login: PropTypes.func.isRequired,
};

LoginForm.defaultProps = {
  errors: undefined,
};

export default LoginForm;
