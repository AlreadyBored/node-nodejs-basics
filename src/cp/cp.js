import { spawn } from 'child_process';
import path from 'path';
import { fileURLToPath } from 'url';

export const spawnChildProcess = async (args) => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  const scriptPath = path.join(__dirname, 'files', 'script.js');

  const child = spawn('node', [scriptPath, ...args], {
    stdio: ['pipe', 'pipe', 'inherit']
  });

  process.stdin.pipe(child.stdin);
  child.stdout.pipe(process.stdout);
};

// Put your arguments in function call to test this functionality
spawnChildProcess(['hello', 'world']);
