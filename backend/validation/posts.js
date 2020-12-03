const Validator = require('validator');
const validText = require('./valid-text');

module.exports = function validatePostInput(data) {
    let errors = {};

    data.text = validText(data.text) ? data.text : '';

    if (!Validator.isLength(data.text, { min: 3, max: 200 })) {
        errors.text = 'Post must be between 3 and 200 characters';
    }

    if (Validator.isEmpty(data.text)) {
        errors.text = 'Post cannot be blank';
    }

    return {
        errors,
        isValid: Object.keys(errors).length === 0
    };
};