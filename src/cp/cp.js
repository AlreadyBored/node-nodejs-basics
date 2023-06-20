import { fork } from 'child_process';

const spawnChildProcess = async (args) => {
    const path = './src/cp/files/script.js';
    const child = fork(path, args, { silent: true });
    process.stdout.pipe(child.stdin);
    child.stdout.pipe(process.stdout);
};

spawnChildProcess();
