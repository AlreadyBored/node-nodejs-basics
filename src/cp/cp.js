import path from 'path';
import { fork } from "child_process";
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export const spawnChildProcess = async (args) => {
  const filename = path.join(__dirname, '/files/script.js')
  fork(filename, args.slice(2));
};

spawnChildProcess(process.argv);
