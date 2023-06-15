import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { fork } from 'node:child_process';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const spawnChildProcess = async (args) => {
    const forkProcess = fork(path.resolve(__dirname, 'files', 'script.js'), args, { silent: true });

    process.stdin.pipe(forkProcess.stdin);
    forkProcess.stdout.pipe(process.stdout);
};

spawnChildProcess(['Hi', 'Bob']);
