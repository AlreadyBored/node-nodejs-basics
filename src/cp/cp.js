import { spawn } from 'child_process';

const spawnChildProcess = (args) => {
  const childProcess = spawn('node', ['files/script.js', ...args], { stdio: ['pipe', 'pipe', 'inherit'] });

  process.stdin.pipe(childProcess.stdin);
  childProcess.stdout.pipe(process.stdout);

  childProcess.on('exit', (code) => {
    console.log(`Child process exited with code ${code}`);
  });

  childProcess.on('error', (error) => {
    console.error('Error occurred in child process:', error);
  });
};

spawnChildProcess(['arg1', 'arg2']);