/**
 * 
 * cp.js - implement function spawnChildProcess that receives array of arguments args and creates child 
 * process from file script.js, passing these args to it. This function should create IPC-channel between 
 * stdin and stdout of master process and child process:
 * child process stdin should receive input from master process stdin
 * child process stdout should send data to master process stdout
 */

import { spawn } from 'child_process';
import { argv0, stdout, stdin } from 'process';
import { fileURLToPath } from 'url';
import { dirname, normalize } from 'path';
const dir = dirname(fileURLToPath(import.meta.url));

const spawnChildProcess = async (args) => {
    // Write your code here
    // console.log(args);
    if (typeof (args) === 'undefined') {
        args = [];
    } else if (!args instanceof Array) {
        args = [args];
    }
    const cp = spawn(normalize(argv0), [normalize(dir + '/files/script.js'), ...args])
    .on('error', err => {throw err;});
    
    cp.stdout.pipe(stdout);
    stdin.pipe(cp.stdin);
};

// Put your arguments in function call to test this functionality
spawnChildProcess( /* [someArgument1, someArgument2, ...] */);
// spawnChildProcess(['someArgument1', 'someArgument2', 3, 44, 555]);
