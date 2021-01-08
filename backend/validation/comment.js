const Validator = require('validator');

function validateCommentInput(text) {
  if (!Validator.isLength(text, { min: 3, max: 200 })) {
    return 'Comment must be between 3 and 200 characters';
  }
}

module.exports = validateCommentInput;