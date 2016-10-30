module.exports = {
  /**
   * Check to see if the number of characters of the value is 1.
   *
   * @param {string} value
   *   The value to be tested.
   * @returns {boolean}
   *   true if valid.
   */
  lengthOne: value => value.length === 1,

  /**
   * Check to see if a value is a non-negative integer.
   *
   * Uses a regular expression to mitigate inconsistent behavior when using
   * bitwise OR and parseFloat with very large numbers.
   *
   * @param {string} value
   *   The value to be tested.
   * @returns {boolean}
   *   true if valid.
   */
  isANonNegativeInteger: value => /^\d+$/.test(value),

  /**
   * Check to see if a value is 0.
   *
   * @param {string} value
   *   The value to be tested.
   * @returns {boolean}
   *   true if valid.
   */
  isZero: value => Number(value) === 0,

  /**
   * Check to see if a value is a string of lowercase ASCII letters.
   *
   * @param {string} value
   *   The value to be tested.
   * @returns {boolean}
   *   true if valid.
   */
  containsOnlyLowercaseAscii: value => /^[a-z]+$/.test(value),

  /**
   * Check to see if a value only contains lowercase "a" characters.
   *
   * @param {string} value
   *   The value to be tested.
   * @returns {boolean}
   *   true if valid.
   */
  isOnlyLowercaseA: value => RegExp(`^a{${value.length}}$`).test(value),

  /**
   * Render errors and exit.
   *
   * @param {Array} errors
   *   Errors which will be displayed one per line.
   * @returns {void}
   */
  renderErrors: (errors) => {
    console.log('Error! Invalid input.');
    console.log(`- ${errors.join('\n- ')}`);
    process.exit(1);
  },
};
