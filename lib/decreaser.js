module.exports = {
  /**
   * Decrease an integer by one.
   *
   * @param {number} value
   *   The value to be acted upon.
   * @returns {number}
   *   The diminished value.
   */
  integer: (value) => {
    return value - 1;
  },

  /**
   * Decrease an ASCII character by its code by one.
   *
   * @param {string} value
   *   The value to be acted upon.
   * @returns {string}
   *   The new character, one ASCII code lower.
   */
  character: (value) => {
    const newCode = module.exports.integer(value.charCodeAt(0));
    return String.fromCharCode(newCode);
  },

  /**
   * Decrease a sequence of ASCII letters by a letter at a time.
   *
   * @param {string} value
   *   The value to be acted upon.
   * @param {boolean} startAtEnd
   *   If set, decreases from the end of the sequence.
   * @returns {string}
   *   A "decreased" iteration of the sequence.
   */
  string: (value, startAtEnd) => {
    const targetChar = startAtEnd ? value.substr(-1) : value.substr(0, 1);
    const isRollover = targetChar === 'a';
    const newChar = isRollover ? 'z' : module.exports.character(targetChar);

    // Replace from the end.
    if (startAtEnd) {
      const remainder = value.substr(0, value.length - 1);
      // Recursion.
      return `${isRollover ? module.exports.string(remainder, startAtEnd) : remainder}${newChar}`;
    }

    // Replace from the beginning.
    const remainder = value.substr(1);
    // Recursion.
    return `${newChar}${isRollover ? module.exports.string(remainder, startAtEnd) : remainder}`;
  },
};
