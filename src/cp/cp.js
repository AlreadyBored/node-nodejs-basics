import { fork } from 'node:child_process';

const spawnChildProcess = async (args) => {
    const scriptPath = new URL('./files/script.js', import.meta.url);
    const childProcess = fork(scriptPath, args, { silent: true });

    process.stdin.pipe(childProcess.stdin);
    childProcess.stdout.pipe(process.stdout);
};

//spawnChildProcess();
spawnChildProcess([ 'q', 'w', 'e', 'r', 't', 'y']);
