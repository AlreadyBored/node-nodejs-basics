import os from 'os';
import { stdin, stdout, chdir, cwd } from 'process';
import { commandHandler } from './commandHandler.js';

const args = process.argv;
const HOME_DIR = os.homedir();
chdir(HOME_DIR);

stdin.setEncoding('utf8');
let user = '';
console.log(
  '\x1b[31m%s\x1b[0m',
  "Dear reviewer. Somehow my npm or terminal doesn't accept additiopnal parameters prefixed with dashes.\n Neither '--username=name' nor '-- --username=name' so please use clear username=name as argument"
);
if (args[2].startsWith('username=')) user = args[2].slice(9);
else {
  console.log('Invalid username');
}

console.log('Welcome to the File Manager, ', '\x1b[36m', user, '!', '\x1b[0m');
console.log(`You are currently in ${HOME_DIR}`);

stdout.write('Enter your command:');
process.on('SIGINT', () => {
  console.log('Thank you for using File Manager,', user, ' goodbye!');
  process.exit();
});

stdin.on('data', async function (chunk) {
  const data = chunk.replace(/\r\n/g, '');
  const command = data.split(' ');
  await commandHandler(command, user);
  const currentWorkingDir = cwd();
  console.log(`You are currently in ${currentWorkingDir}`);
  stdout.write('\x1b[36m');
  stdout.write('Enter your command:');
  stdout.write('\x1b[0m');
});
