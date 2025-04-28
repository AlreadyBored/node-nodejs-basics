import { spawn } from 'node:child_process';
import path from 'node:path';

const spawnChildProcess = async (args) => {
  const scriptPath = path.resolve(`${import.meta.dirname}/files/script.js`);

  const child = spawn('node', [scriptPath, ...args], {
    stdio: ['pipe', 'pipe', 'inherit']
  });

  process.stdin.pipe(child.stdin);

  child.stdout.pipe(process.stdout);

  child.on('exit', (code) => {
    console.log(`Child process exited with code ${code}`);
  });
};

// Put your arguments in function call to test this functionality
spawnChildProcess(['test1', 'test2']);