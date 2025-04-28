import { spawn } from 'node:child_process';

// cp.js - implement function spawnChildProcess that receives array
// of arguments args and creates child process from file script.js,
//  passing these args to it. This function should create IPC-channel
// between stdin and stdout of master process and child process:
//      - child process stdin should receive input from master process stdin
//      - child process stdout should send data to master process stdout

const spawnChildProcess = async (args) => {
    // Write your code here
    const pathToScriptFile = './files/script.js';

    const child = spawn('node', [pathToScriptFile, ...args], {
        stdio: ['pipe', 'pipe', 'pipe'],
    });

    process.stdin.pipe(child.stdin);
    child.stdout.pipe(process.stdout);

    child.on('error', (error) => {
        console.error('Error in child:', error.message);
    });
};

// Put your arguments in function call to test this functionality
spawnChildProcess(['someArgument1', 'someArgument2', 'someArgument3']);
