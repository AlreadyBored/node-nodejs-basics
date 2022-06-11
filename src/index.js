import { parseArgs } from './cli/args.js';
import {
  printGreeteing,
  printFarewell,
  printCurrentDiretory,
  printInvalidInput
} from './helpers/message.js';
import { __dirname, list } from './fs/list.js';



const DIVIDER = '\\';
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
    case 'up':
      const lastIndex = currentDirectory.lastIndexOf(DIVIDER);
      const firstIndex = currentDirectory.indexOf(DIVIDER);
      const newDirectory = currentDirectory.slice(0, lastIndex);
      if (lastIndex !== firstIndex) {
        currentDirectory = newDirectory;
      } else {
        currentDirectory = currentDirectory.slice(0, lastIndex + 1);
      }
      printCurrentDiretory(currentDirectory);
      break;

    default:
      printInvalidInput();
      break;

  }

});










process.on('exit', () => {
  printFarewell(userName);
});

process.on('SIGINT', () => {
  process.exit();
});
