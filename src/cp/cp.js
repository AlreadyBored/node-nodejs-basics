import { spawn } from 'child_process';
import path from 'path';
import { fileURLToPath } from 'url';

const spawnChildProcess = async (args) => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);

  const child = spawn('node', [path.join(__dirname, 'files', 'script.js'), ...args]);

  child.stdout.pipe(process.stdout);
  process.stdin.pipe(child.stdin);
};

spawnChildProcess(['arg1', 'arg2', 'arg3']);
