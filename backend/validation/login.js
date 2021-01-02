const Validator = require('validator');

function validateLoginInput(data) {
  const { email } = data;
  const { password } = data;

  if (Validator.isEmpty(email)) {
    return 'Email field is required';
  }

  if (!Validator.isEmail(email)) {
    return 'Email is invalid';
  }

  if (Validator.isEmpty(password)) {
    return 'Password field is required';
  }
}

module.exports = validateLoginInput;
