const validator = require('../lib/validator');

/**
 * Takes an integer and counts down to "0".
 *
 * @param {string} value
 *   The value to be counted down.
 * @returns {void}
 */
module.exports = (value) => {
  const errors = [];

  // Validate input.
  if (!validator.isAPositiveInteger(value)) {
    errors.push('Value is not a positive integer.');
  }

  // Check if there are any errors.
  if (errors.length > 0) {
    validator.renderErrors(errors);
  }

  // Execute.
  for (let working = value; working >= 0; working -= 1) {
    console.log(working);
  }
};
