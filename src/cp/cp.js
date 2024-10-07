import { fork } from 'child_process'
import { stdout } from 'process';
import os from 'os';

const spawnChildProcess = async (args) => {
    const forkedChildProcess = fork('src/cp/files/script.js', args);
    forkedChildProcess.on('message', (message) => {
        stdout.write(message);
    });
};

// Put your arguments in function call to test this functionality
spawnChildProcess(['someArgument1', 'someArgument2']);
