// implement function spawnChildProcess that receives array of arguments args and creates child process from file script.js, passing these args to it. This function should create IPC-channel between stdin and stdout of master process and child process:
// child process stdin should receive input from master process stdin
// child process stdout should send data to master process stdout
import { resolve } from 'node:path';
import { spawn } from 'node:child_process';
import { getDirName } from '../../utils/getDirName.js';

const spawnChildProcess = async (args) => {
    const __dirname = getDirName(import.meta.url);
    const pathToParent = resolve(__dirname, 'files', 'script.js');

    const child = spawn('node', [pathToParent, ...args]);

    process.stdin.pipe(child.stdin);

    child.stdout.pipe(process.stdout);
};

spawnChildProcess( [1, 2, 'bite']);
