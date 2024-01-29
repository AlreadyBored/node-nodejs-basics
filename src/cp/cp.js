import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { spawn } from 'child_process';
import process from 'node:process';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const pathToFile = join(__dirname, 'files', 'script.js');

const spawnChildProcess = async (args) => {
    const allArgs = [pathToFile].concat(args);
    //console.log('allArgs = ', allArgs);
    const childProcess = spawn('node', [pathToFile, ...args], {stdio: ["pipe", "pipe", "pipe", "ipc"]});

    process.stdin.pipe(childProcess.stdin);

    childProcess.stdout.pipe(process.stdout);
};

spawnChildProcess(['--some-arg value1', '--other 1337', '--arg2 42']);
