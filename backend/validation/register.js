const Validator = require('validator');

function validateRegisterInput(data) {
  if (Validator.isEmpty(data.email)) {
    return 'Email field is required';
  }

  if (!Validator.isEmail(data.email)) {
    return 'Email is invalid';
  }

  if (!Validator.isLength(data.username, { min: 3, max: 30 })) {
    return 'Username must be between 3 and 30 characters';
  }

  if (!Validator.isLength(data.password, { min: 8, max: 30 })) {
    return 'Password must be at least 8 characters';
  }

  if (!Validator.equals(data.password, data.password2)) {
    return 'Passwords must match';
  }
}

module.exports = validateRegisterInput;
