import { spawn } from 'child_process';
import { HELPER } from '../fs/modules/helpers.mjs';

const spawnChildProcess = async (args) => {
  const filePath = HELPER.getDirPath(import.meta.url) + '/files/script.js';
  const child = spawn(`node`, [`${filePath}`, ...args]);

  child.stdout.pipe(process.stdout);
  process.stdin.pipe(child.stdin);
};

// Put your arguments in function call to test this functionality
spawnChildProcess(['some', '-arg']);
