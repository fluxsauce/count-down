module.exports = {
  /**
   * Decrease an ASCII character by its code.
   *
   * @param {string} value
   *   The character to be acted upon.
   * @returns {string}
   *   The new character, one ASCII code lower.
   */
  character: (value) => {
    const newCode = value.charCodeAt(0) - 1;
    return String.fromCharCode(newCode);
  },

  /**
   * Decrease a sequence of ASCII letters by a letter at a time.
   *
   * Starts at the beginning of the string.
   *
   * @param {string} value
   *   The value to be acted upon.
   * @returns {string}
   *   A "decreased" iteration of the sequence.
   */
  string: (value) => {
    const firstChar = value.substr(0, 1);
    const isRollover = firstChar === 'a';
    const newChar = isRollover ? 'z' : module.exports.character(firstChar);
    const remainder = value.substr(1);
    return `${newChar}${isRollover ? module.exports.string(remainder) : remainder}`;
  },

  /**
   * Same as "string", but starts at the end.
   *
   * @param {string} value
   *   The value to be acted upon.
   * @returns {string}
   *   A "decreased" iteration of the sequence.
   */
  gnirts: (value) => {
    const lastChar = value.substr(-1);
    const isRollover = lastChar === 'a';
    const newChar = isRollover ? 'z' : module.exports.character(lastChar);
    const remainder = value.substr(0, value.length - 1);
    return `${isRollover ? module.exports.gnirts(remainder) : remainder}${newChar}`;
  },
};
