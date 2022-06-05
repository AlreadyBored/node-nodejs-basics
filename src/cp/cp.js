import { fork } from 'child_process';

export const spawnChildProcess = async (args) => {
    const child = fork('./files/script.js', args);
    return child
};

spawnChildProcess(['1', '2', '3']);
