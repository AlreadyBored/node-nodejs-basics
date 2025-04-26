import { spawn } from 'child_process';
import path from 'node:path';

const spawnChildProcess = async (args) => {
  const folderPath = path.join('src', 'cp', 'files');

  const child = spawn('node', [`${folderPath}script.js`, ...args], {
    stdio: ['pipe', 'pipe', 'inherit', 'ipc'],
  });

  process.stdin.pipe(child.stdin);

  child.stdout.pipe(process.stdout);

  child.on('error', (error) => {
    console.error(`Error in child process: ${error.message}`);
  });

  child.on('close', (code) => {
    console.log(`Child process exited with code ${code}`);
  });
};

spawnChildProcess(['arg1', 'arg2']);
