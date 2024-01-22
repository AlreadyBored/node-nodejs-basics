import { spawn } from 'child_process';

const spawnChildProcess = async (args) => {
  const childProcess = spawn('node', ['./files/script.js', ...args], { stdio: 'pipe' });

  process.stdin.pipe(childProcess.stdin);
  childProcess.stdout.pipe(process.stdout);
};

// Put your arguments in the function call to test this functionality
spawnChildProcess(['someArgument1', 'someArgument2']);
