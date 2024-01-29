import { spawn } from 'node:child_process';
import path, { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const childModule = path.join(__dirname, 'files', 'script.js');

const spawnChildProcess = async (args) => {
  const cp = spawn('node', [childModule, ...args]);
};

spawnChildProcess([1, 'a']);
