import { fork } from 'node:child_process';

const spawnChildProcess = async (args) => {
    const process = fork('./src/cp/files/script.js', args);
};

// Put your arguments in function call to test this functionality
spawnChildProcess([1, 2, 3, 4]);
