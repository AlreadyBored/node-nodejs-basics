import { fork } from 'child_process';

const spawnChildProcess = async (args) => {
    // Write your code here

    const path = new URL('./files/script.js', import.meta.url);
    fork(path, args);
};

// Put your arguments in function call to test this functionality
spawnChildProcess( /* [someArgument1, someArgument2, ...] */);
