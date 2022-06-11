import  * as path from 'path';
import * as fs from 'fs';
import { parseArgs } from './cli/args.js';
import {
  printGreeteing,
  printFarewell,
  printCurrentDiretory,
  printInvalidInput,
  printInvalidOperation
} from './helpers/message.js';
import { __dirname, list } from './fs/list.js';
import { read } from './streams/read.js';
import { create } from './fs/create.js';

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
  try {
    const commandFromCli = chunk.toString().trim();
    if (commandFromCli.includes('.exit')) {
      process.exit();
    }
    const [command, argumnent] = commandFromCli.split(' ');

    switch (command) {
      case 'ls':
        if (!argumnent) {
          list(currentDirectory);
        } else {
          printInvalidInput();
        }
        break;
      case 'up':
        if (!argumnent) {
          const lastIndex = currentDirectory.lastIndexOf(DIVIDER);
          const firstIndex = currentDirectory.indexOf(DIVIDER);
          const newDirectory = currentDirectory.slice(0, lastIndex);
          if (lastIndex !== firstIndex) {
            currentDirectory = newDirectory;
          } else {
            currentDirectory = currentDirectory.slice(0, lastIndex + 1);
          }
          printCurrentDiretory(currentDirectory);
        } else {
          printInvalidInput();
        }
        break;
      case 'cd':
        if (argumnent) {
          const newDirectory = path.join(currentDirectory, argumnent);
          fs.access(newDirectory, fs.constants.F_OK, (err) => {
            if (err) {
              printInvalidInput();
            } else {
              currentDirectory = newDirectory;
              printCurrentDiretory(currentDirectory);
            }
          });

        } else {
          printInvalidInput();
        }
        break;
      case 'cat':
        if (argumnent) {
          const pathToFile = path.join(currentDirectory, argumnent);
          fs.access(pathToFile, fs.constants.F_OK, (err) => {
            if (err) {
              printInvalidInput();
            } else {
              read(pathToFile);
            }
          });

        } else {
          printInvalidInput();
        }
        break;
      case 'add':
        if (argumnent) {
          const pathToFile = path.join(currentDirectory, argumnent);

          fs.access(pathToFile, fs.constants.F_OK, (err) => {
            if (!err) {
              printInvalidInput();
            } else {
              create(pathToFile, '');
            }
          });

        } else {
          printInvalidInput();
        }
        break;

      default:
        printInvalidInput();
        break;
    }

  } catch {
    printInvalidOperation();
  }
});










process.on('exit', () => {
  printFarewell(userName);
});

process.on('SIGINT', () => {
  process.exit();
});
