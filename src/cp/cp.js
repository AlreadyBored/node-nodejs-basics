import { spawn } from 'node:child_process';
import { pipeline } from 'node:stream/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const scriptPath = path.join(__dirname, 'files', 'script.js');

export const spawnChildProcess = async (args = []) => {
  const child = spawn(process.execPath, [scriptPath, ...args], {
    stdio: ['pipe', 'pipe', 'inherit'],
  });

  const stdinToChild = pipeline(process.stdin, child.stdin).catch(() => { });
  const childToStdout = pipeline(child.stdout, process.stdout).catch(() => { });

  return new Promise((resolve, reject) => {
    child.once('error', reject);
    child.once('exit', async (code) => {
      try {
        await Promise.allSettled([stdinToChild, childToStdout]);
      } finally {
        if (code === 0) {
          resolve();
        } else {
          reject(new Error(`Child exited with code ${code}`));
        }
      }
    });
  });
};

spawnChildProcess(['someArgument1', 'someArgument2']);
