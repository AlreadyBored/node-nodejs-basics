import { fork } from 'node:child_process';

const CHILD_PATH = './src/cp/files/script.js';

const spawnChildProcess = async (args) => {
    fork(CHILD_PATH, args);
};

// Put your arguments in function call to test this functionality
spawnChildProcess( ['someArgument1', 'someArgument2'] );
