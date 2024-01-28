import { getFilePath } from '../utils/fs.js';
import { fork } from 'node:child_process';

const childPath = getFilePath(import.meta.url, 'files', 'script.js');

const spawnChildProcess = async (args) => {
    const child = fork(childPath, args);
    child.on("close", (code) => {
        console.log("child process exited with code " + code);
    });
};

// Put your arguments in function call to test this functionality
spawnChildProcess(['someArgument1', 'someArgument2']);
