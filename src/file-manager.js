import fs from 'node:fs';
import fsPromise from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';
import {fileURLToPath} from 'node:url';

const args = process.argv.slice(2)
const userName = args.find(item => item.startsWith('--username='))?.split('=')[1] || 'User'

const homeDir = os.homedir();
let currentDir = homeDir;

process.stdout.write(`Welcome to the File Manager, ${userName}!`);
process.stdout.write(`\n`)

const onExit = () => {
  process.stdout.write('\n');
  process.stdout.write(`Thank you for using File Manager, ${userName}, goodbye!`);
  process.exit();
}

const onData = async (chunk) => {
  const commandArray = chunk.toString().replaceAll('\n', '').split(' ')
  const cmd = commandArray[0]
  const args = commandArray.slice(1)

  switch (cmd) {
    case 'up': {
      if (currentDir !== homeDir) {
        currentDir = path.resolve(currentDir, '../');
      }
      break;
    }
    case 'cd': {
      const newPath = args[0];

      if (!newPath) {
        process.stderr.write('\nInvalid input');
      }
      currentDir = path.resolve(currentDir, newPath);
      break;
    }
    case 'ls': {
      const dirents = await fsPromise.readdir(currentDir, {withFileTypes: true});
      const rows = dirents.map((dirent) => {
        let type = '🤷🏼 '; // unknown type
        if (dirent.isFile()) {
          type = '📄 '; // file type
        }
        if (dirent.isDirectory()) {
          type = '📂 '; // directory type
        }
        return type + dirent.name
      }).sort((a, b) => a.localeCompare(b));

      process.stdout.write(rows.join('\n'))

      break;
    }
    case 'exit': {
      onExit();
      break;
    }
    default: {
      process.stderr.write('Invalid input');
    }
  }

  process.stdout.write(`\nYou are currently in ${currentDir}`);
  process.stdout.write(`\n`);
}

process.stdin.on('data', onData);

process.stdin.resume();
process.on('SIGINT', () => {
  onExit();
});


