import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { fork } from 'child_process';

const __dirname = dirname(fileURLToPath(import.meta.url));
const SCRIPT_PATH = join(__dirname, 'files', 'script.js');

const spawnChildProcess = async (args) => {
  const childProcess = fork(SCRIPT_PATH, args, { silent: true });

  process.stdin.pipe(childProcess.stdin);
  childProcess.stdout.pipe(process.stdout);
};

// Put your arguments in function call to test this functionality
spawnChildProcess(/* [someArgument1, someArgument2, ...] */);
