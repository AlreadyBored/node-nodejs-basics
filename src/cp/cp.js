import { fork } from 'child_process';

const spawnChildProcess = async (args) => {
    // Write your code here
    const childProcess = fork('./src/cp/files/script.js', args);
};

// Put your arguments in function call to test this functionality
spawnChildProcess( ['1', '2',]);
