import { fork } from 'child_process';

const fileScript = './files/script.js';
const pathToScript = new URL(fileScript, import.meta.url);

const spawnChildProcess = async (args) => {
   const childProcess = fork(pathToScript, args, { silent: true });

   process.stdin.pipe(childProcess.stdin);
   childProcess.stdout.pipe(process.stdout);
};

spawnChildProcess(['cat', 'dog','windows', 'linux']);
