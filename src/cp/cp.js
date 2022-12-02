import { fileURLToPath } from 'node:url';
import path from 'node:path';
import { spawn } from 'node:child_process';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
/*
cp.js - implement function spawnChildProcess
that receives array of arguments args and creates child process
from file script.js, passing these args to it.
This function should create IPC-channel between
stdin and stdout of master process and child process
*/
const spawnChildProcess = async (args) => {
    // Write your code here 
    if (args?.length && typeof args !== 'string') {
        const childProcess = spawn('node', [`${__dirname}/files/script.js`, ...args]);
        childProcess.stdout.pipe(process.stdout);
        process.stdin.pipe(childProcess.stdin);
    } else {
        throw new Error('Function spawnChildProcess expects to receive an array')
    }
};

spawnChildProcess([1,3,7]);