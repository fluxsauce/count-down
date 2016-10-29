#!/usr/bin/env node

// Graceful failure if using the wrong version of node.
if (process.version.split('.')[0].replace('v', '') < 6) {
  console.log('count-down requires node.js 6 or higher.');
  process.exit(1);
}

const alpha = require('./commands/alpha');
const help = require('./commands/help');
const integer = require('./commands/integer');
const string = require('./commands/string');

// No input or explicitly requesting help.
if (typeof process.argv[2] === 'undefined' || process.argv[2] === 'help') {
  help();
  // Success.
  process.exit(0);
}

// Check for value.
if (typeof process.argv[3] === 'undefined') {
  console.log('Error! Missing second argument, which is the value to be operated on.');
  process.exit(1);
}

// Commands.
switch (process.argv[2]) {
  case 'integer':
    integer(process.argv[3]);
    break;

  case 'alpha':
    alpha(process.argv[3]);
    break;

  case 'string':
    string(process.argv[3]);
    break;

  case 'gnirts':
    string(process.argv[3], true);
    break;

  default:
    console.log('Error! Unknown command.\n');
    // Guide the user.
    help();
    // Failure.
    process.exit(1);
}
