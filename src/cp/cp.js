import { spawn } from 'node:child_process';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const spawnChildProcess = (args = []) => {
  const scriptPath = path.join(__dirname, 'files', 'script.js');

  const child = spawn(process.execPath, [scriptPath, ...args], {
    stdio: ['pipe', 'pipe', 'inherit'], 
  });

  process.stdin.pipe(child.stdin);
  child.stdout.pipe(process.stdout);

  child.on('error', (err) => console.error('Child error:', err.message));
  child.on('exit', (code) => console.log(`Child exited with code ${code}`));
};

spawnChildProcess(['test1', 'test2', 'test3', '444']);


