/*
cp.js - implement function spawnChildProcess that receives array 
of arguments args and creates child process from file script.js, 
passing these args to it. This function should create IPC-channel 
between stdin and stdout of master process and child process:

    -> child process stdin should receive input from master process stdin
    -> child process stdout should send data to master process stdout
*/

import { fork } from "child_process";

const SCRIPT_PATH = "./files/script.js";
const scriptUrl = new URL(SCRIPT_PATH, import.meta.url);

const spawnChildProcess = async (args) => {

    // creates a child process with recived arguments
    const childProcess = fork(scriptUrl, args, { silent: true });
  
    // main process to child
    process.stdin.pipe(childProcess.stdin);

    // child process to main
    childProcess.stdout.pipe(process.stdout)
};

// Put your arguments in function call to test this functionality
// spawnChildProcess([1, 2, 3]);
spawnChildProcess();