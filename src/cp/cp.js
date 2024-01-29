import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { spawn } from 'node:child_process';

const __dirname = dirname(fileURLToPath(import.meta.url));

const spawnChildProcess = async (args) => {
  const childProcess = spawn('node', [`${join(__dirname, 'files', 'script.js')}`, ...args], { stdio: 'inherit' });
};

spawnChildProcess(['value1', '1337', '42']);
