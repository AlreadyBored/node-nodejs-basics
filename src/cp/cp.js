import { fork } from 'node:child_process';

const spawnChildProcess = async (args) => {
    const child = fork('src/cp/files/script.js', args);

    child.on('message', data => console.log('Received from child', data))
};

spawnChildProcess(['someArgument1', 'someArgument2',]);
