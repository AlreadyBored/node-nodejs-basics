import { spawn } from 'node:child_process';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const spawnChildProcess = async (args) => {
  const childScript = path.resolve(__dirname, 'files', 'script.js');

  const child = spawn('node', [childScript, ...args], {
    stdio: ['pipe', 'pipe', 'inherit'],
  });

  process.stdin.pipe(child.stdin);

  child.stdout.pipe(process.stdout);

  child.on('close', (code) => {
    console.log(`\nChild process exited with code ${code}`);
  });

  child.on('error', (err) => {
    console.error('Failed to start child process:', err);
  });
};

spawnChildProcess(['smth', 'bbb']);
