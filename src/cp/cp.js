// implement function spawnChildProcess that receives array of arguments args and creates child process from file script.js, passing these args to it. This function should create IPC-channel between stdin and stdout of master process and child process:
// child process stdin should receive input from master process stdin
// child process stdout should send data to master process stdout
import { fork } from 'node:child_process';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const spawnChildProcess = async (args) => {
    const __dirname = path.dirname(fileURLToPath(import.meta.url));
    const pathToParent = path.resolve(__dirname, 'files', 'script.js');
    fork(pathToParent, args);
};

spawnChildProcess( [1, 2, 'bite']);
