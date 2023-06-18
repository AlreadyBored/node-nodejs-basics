import cp from 'child_process';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';

const spawnChildProcess = async (args) => {
    const __dirname = dirname(fileURLToPath(import.meta.url));
    const pathToScript = path.join(__dirname, 'files', 'script.js');

    const childProcess = cp.fork(pathToScript, args, { silent: true });

    process.stdin.pipe(childProcess.stdin);
    childProcess.stdout.pipe(process.stdout);
};

spawnChildProcess([1, 2, 3, 4, 5]);
