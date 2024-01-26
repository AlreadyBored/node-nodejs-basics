/**
 * 
 * cp.js - implement function spawnChildProcess that receives array of arguments args and creates child 
 * process from file script.js, passing these args to it. This function should create IPC-channel between 
 * stdin and stdout of master process and child process:
 * child process stdin should receive input from master process stdin
 * child process stdout should send data to master process stdout
 */

import { spawn } from 'child_process';
import { join as platform_path } from 'path';
import { argv0, stdout, stdin } from 'process';

const spawnChildProcess = async (args) => {
    // Write your code here
    // console.log(args);
    if (typeof (args) === 'undefined') {
        args = [];
    } else if (!args instanceof Array) {
        args = [args];
    }
    const cp = spawn(argv0, [platform_path('files', 'script.js'), ...args]);
    cp.stdout.pipe(stdout);
    stdin.pipe(cp.stdin);
};

// Put your arguments in function call to test this functionality
// spawnChildProcess();
spawnChildProcess(['someArgument1', 'someArgument2', 3, 44, 555]);
