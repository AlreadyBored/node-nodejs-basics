import { fork } from 'node:child_process';
import { resolve } from 'node:path';
import { getPath } from '../fs/utils.js';

const spawnChildProcess = async (args) => {
    const __dirname = getPath(import.meta.url);
    const script = resolve(__dirname, 'files', 'script.js');
    const child = fork(script, args, { silent: true });

    process.stdin.pipe(child.stdin);
    child.stdout.pipe(process.stdout);
};

// Put your arguments in function call to test this functionality
spawnChildProcess(process.argv);
