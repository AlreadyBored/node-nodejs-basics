import { spawn } from 'node:child_process';
import { stdin, stdout } from 'node:process';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const spawnChildProcess = async (args) => {
  return new Promise((resolve, reject) => {
    const scriptPath = path.join(__dirname, 'files', 'script.js');

    const child = spawn('node', [scriptPath, ...args], {
      stdio: ['pipe', 'pipe', 'inherit'],
    });

    stdin.pipe(child.stdin);

    child.stdout.pipe(stdout);

    child.on('close', (code) => {
      resolve(`Child process exited with code ${code}`);
    });

    child.on('error', (err) => {
      reject(err);
    });
  });
};

// Пример вызова для теста
spawnChildProcess(['arg1', 'arg2']);
