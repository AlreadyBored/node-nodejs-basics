import { parseArgs } from './cli/args.js';
import {
  printGreeteing,
  printFarewell,
  printCurrentDiretory
} from './helpers/message.js';
import { __dirname, list } from './fs/list.js';




const USER_NAME_ARGUMENT = 'username';
const args = parseArgs();

let userName = 'JOHN DOE';
let currentDirectory = __dirname;

if (args[USER_NAME_ARGUMENT]) {
  userName = args[USER_NAME_ARGUMENT];
  printGreeteing(userName);
}

printCurrentDiretory(currentDirectory);

process.stdin.on('data', chunk => {
  const command = chunk.toString().trim();
  if (command.includes('.exit')) {
    process.exit();
  }
  switch (command) {
    case 'ls':
      list(currentDirectory);
      break;
    default:
      break;

  }

});










// process.exit(farewell(userName));
process.on('exit', () => {
  printFarewell(userName);
});

process.on('SIGINT', () => {
  printFarewell(userName);
});

// process.exit();
