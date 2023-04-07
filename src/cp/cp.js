import { spawn } from 'node:child_process';

const inputArgs = process.argv.slice(2);

const spawnChildProcess = async (args) => {
  const childProcess = spawn('node', ['./files/script.js', ...args]);

  childProcess.stdout.on('data', (data) => {
    console.log(`stdout: ${data.toString()}`);
  });

  childProcess.stdin.write('Child process started');
};

// Put your arguments in function call to test this functionality
await spawnChildProcess(inputArgs);
