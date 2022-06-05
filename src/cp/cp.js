import { fork } from 'child_process';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const spawnChildProcess = async (args) => {
  const child = fork(join(__dirname, 'files', 'script.js'), args);
  child.on('message', (msg) => {
    console.log('Received from child process:', msg);
  });
};

spawnChildProcess(process.argv.slice(2));
