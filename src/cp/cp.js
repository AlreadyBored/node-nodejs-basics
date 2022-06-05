import { argv } from 'node:process';
import * as path from 'path';
import { fileURLToPath } from 'url';
import { fork } from 'child_process';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const filePath = path.join(__dirname, 'files', 'script.js');

export const spawnChildProcess = async (args) => {
  let argsSlice = args.slice(2);
  const ls = fork(filePath, argsSlice);
};
spawnChildProcess(argv);
