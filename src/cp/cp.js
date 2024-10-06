import cp from 'child_process';
import path from 'path';

const SCRIPT_PATH = path.resolve('src', 'cp', 'files', 'script.js');

const spawnChildProcess = async (...args) => {
  const childProcess = cp.fork(SCRIPT_PATH, args, { silent: true });

  process.stdin.pipe(childProcess.stdin);
  childProcess.stdout.pipe(process.stdout);

  childProcess.stdout.on('data', (chunk) => {
    process.stdout.write(`Received from child process: ${chunk}`);
  });
};

spawnChildProcess(1,2,3);
