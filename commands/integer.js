const decreaser = require('../lib/decreaser');
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
  if (!validator.isANonNegativeInteger(value)) {
    errors.push('Value is not an integer greater-than or equal to 0.');
  }

  // Check if there are any errors.
  if (errors.length > 0) {
    validator.renderErrors(errors);
  }

  // Execute.
  let working = value;
  console.log(working);
  while (!validator.isZero(working)) {
    working = decreaser.integer(working);
    console.log(working);
  }
};
