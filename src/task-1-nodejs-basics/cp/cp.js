import { spawn } from 'node:child_process';
import path from 'node:path';

const FILE_TO_SPAWN = 'script.js';
const currentDirectory = process.cwd();
const filepath = path.join(currentDirectory, '/files', FILE_TO_SPAWN);

const spawnChildProcess = async (args) => {
  const child = spawn('node', [filepath, ...args]);

  process.stdin.pipe(child.stdin);
  child.stdout.pipe(process.stdout);

  child.on('error', err => {
    console.error(`Failed to start child process: ${err.message}`);
  });

  child.on('close', code => {
    console.log(`\nChild process exited with code ${code}`);
  });

  return child;
};

// Put your arguments in function call to test this functionality
spawnChildProcess([123, 'test string', false]);
