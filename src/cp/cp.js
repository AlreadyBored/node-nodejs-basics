/*
* implement function spawnChildProcess that receives array of arguments args and creates child process
* from file script.js, passing these args to it.
* This function should create IPC-channel between stdin and stdout of master process and child process:
*/
import { spawn } from 'node:child_process';

const spawnChildProcess = async (args) => {
    spawn('node', ['./src/cp/files/script.js', ...args], {
        stdio: [process.stdin, process.stdout]
    });
};

// Put your arguments in function call to test this functionality
spawnChildProcess( ['someArgument1', 'someArgument2' ]);
