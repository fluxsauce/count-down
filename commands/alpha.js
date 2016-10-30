const decreaser = require('../lib/decreaser');
const validator = require('../lib/validator');

/**
 * Takes a single lowercase ASCII letter and counts down to "a".
 *
 * @param {string} value
 *   The value to be counted down.
 * @returns {void}
 */
module.exports = (value) => {
  const errors = [];

  // Validate input.
  if (!validator.lengthOne(value)) {
    errors.push('Value is not a single character.');
  }
  else if (!validator.containsOnlyLowercaseAscii(value)) {
    errors.push('Value should contain only lowercase letters.');
  }

  // Check if there are any errors.
  if (errors.length > 0) {
    validator.renderErrors(errors);
  }

  // Execute.
  let working = value;
  console.log(working);
  while (!validator.isOnlyLowercaseA(working)) {
    working = decreaser.character(working);
    console.log(working);
  }
};
