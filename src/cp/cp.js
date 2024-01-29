import { spawn } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import path from 'path';

process.stdin.setEncoding('utf-8');
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const spawnChildProcess = async (args) => {
  const childPath = path.join(__dirname, 'files', 'script.js');
  const child = spawn('node', [childPath, ...args], {
    stdio: ['inherit', 'inherit', 'inherit', 'ipc'],
  });

  process.stdin.on('data', (data) => {
    child.send(data);
  });

  child.on('message', (msg) => {
    if (msg.includes('CLOSE')) process.exit(0);
    console.log('Received from child process: ', msg);
  });
};

spawnChildProcess([1, 2]);
