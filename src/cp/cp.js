import { spawn } from 'node:child_process';
import { join } from 'node:path';

const spawnChildProcess = async (args) => {
  const scriptPath = join('src', 'cp', 'files', 'script.js');

  const child = spawn('node', [scriptPath, ...args], {
    stdio: ['pipe', 'pipe', 'inherit'],
  });

  process.stdin.pipe(child.stdin);
  child.stdout.pipe(process.stdout);

  await new Promise((resolve, reject) => {
    child.on('exit', (code) => {
      if (code === 0) {
        resolve();
      } else {
        reject(new Error(`Child process exited with code ${code}`));
      }
    });
  });
};

await spawnChildProcess(['arg1', 'arg2']);
