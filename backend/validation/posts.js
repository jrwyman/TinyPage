const Validator = require('validator');

function validatePostInput(data) {
  if (!Validator.isLength(data.text, { min: 3, max: 200 })) {
    return 'Post must be between 3 and 200 characters';
  }
}

module.exports = validatePostInput;
