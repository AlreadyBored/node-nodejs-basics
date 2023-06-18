import { spawn } from 'node:child_process';

const spawnChildProcess = async (args) => {
  const childProcess = spawn('node', ['./src/cp/files/script.js', ...args], {
    stdio: ['pipe', 'pipe', process.stderr, 'ipc'],
  });
  process.stdin.pipe(childProcess.stdin);
  childProcess.stdout.pipe(process.stdout);
};

// Put your arguments in function call to test this functionality
spawnChildProcess(
  [1, 23, 21213, 12312312] /* [someArgument1, someArgument2, ...] */
);
