/**
 * Render help.
 */
module.exports = () => {
  const help = [
    'Usage: count-down <command> <value>',
    '',
    'commands:',
    '  - help: instructions',
    '  - integer: takes an integer & counts down to "0"',
    '    ex: "count-down integer 5"',
    '  - alpha: takes a single lowercase ASCII letter & counts down to "a"',
    '    ex: "count-down alpha f"',
    '  - string: takes a string of lowercase ASCII letters & counts down each until all characters are "a"',
    '    ex: "count-down string food"',
    '  - gnirts: same as the string command, but decreases from last character',
    '    ex: "count-down gnirts food"',
  ];
  console.log(help.join('\n'));
};
