const decreaser = require('../lib/decreaser');
const validator = require('../lib/validator');

/**
 * Takes a single lowercase ASCII letter and counts down to "a".
 *
 * @param {string} value
 *   The value to be counted down.
 * @param {boolean} startAtEnd
 *   If set, will decrease from the last character.
 * @returns {void}
 */
module.exports = (value, startAtEnd) => {
  const errors = [];

  // Validate input.
  if (!validator.containsOnlyLowercaseAscii(value)) {
    errors.push('Value must only contain lowercase ASCII characters.');
  }

  // Check if there are any errors.
  if (errors.length > 0) {
    validator.renderErrors(errors);
  }

  // Execute.
  let working = value;
  console.log(working);
  while (!validator.isOnlyLowercaseA(working)) {
    working = decreaser.string(working, startAtEnd);
    console.log(working);
  }
};
