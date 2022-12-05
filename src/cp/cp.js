import { fork } from 'child_process';
import { resolve } from 'path';

const scriptPath = resolve('src', 'cp', 'files', 'script.js');
const args = process.argv.slice(2);

const spawnChildProcess = async () => {
    fork(scriptPath, args, {
        stdio: [process.stdin, process.stdout, "ipc"],
    });
};

spawnChildProcess();