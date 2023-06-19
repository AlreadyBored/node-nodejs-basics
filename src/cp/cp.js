import { spawn } from 'child_process';
import {dirname} from "path";
import {fileURLToPath} from "url";

const spawnChildProcess = async (args) => {
  const dir = dirname(fileURLToPath(import.meta.url))
  const child = spawn('node', [`${dir}/files/script.js`, ...args]);

  process.stdin.pipe(child.stdin);

  child.stdout.on('data', (data) => {
    process.stdout.write(data);
  });
};

// Put your arguments in function call to test this functionality
spawnChildProcess([1, 2]);
