import { fork } from 'node:child_process';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const childFilePath = path.resolve(__dirname, 'files', 'script.js');

const spawnChildProcess = async (args) => {
  const child = fork(childFilePath, args, { silent: true });

  process.stdin.pipe(child.stdin);

  child.stdout.pipe(process.stdout);
};

// Put your arguments in function call to test this functionality
spawnChildProcess(/* [someArgument1, someArgument2, ...] */);
// spawnChildProcess(['arg1', 'arg2', 'arg3']);
