import { getFilesFolderPath } from "../utils.js";
import { spawn } from 'child_process';

const spawnChildProcess = async (args) => {
  const fileName = 'script.js';
  const filePath = `${getFilesFolderPath('cp')}/${fileName}`;

  const cp = spawn('node', [filePath, ...args], {
    stdio: ['pipe', 'pipe'],
  });

  process.stdin.pipe(cp.stdin);
  cp.stdout.pipe(process.stdout);
};

spawnChildProcess(['arg1', 'arg2', 'arg3']);
