import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { spawn } from 'child_process';

export const spawnChildProcess = async (args) => {
  const filename = fileURLToPath(import.meta.url);
  const childPath = join(dirname(filename), 'files/script.js');

  const child = spawn('node', [childPath, ...args.slice(2)]);

  child.stdout.on('data', (data) => {
    console.log('From child:', data.toString());
  });

  process.stdin.pipe(child.stdin);
};

spawnChildProcess(process.argv);
