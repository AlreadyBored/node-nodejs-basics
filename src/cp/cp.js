import { fork } from 'child_process';

const CHILD_MODULE = './files/script.js';

const spawnChildProcess = async (args) => {
    fork(CHILD_MODULE, args);
};

spawnChildProcess([1, 2, 3, 4, 5]);
