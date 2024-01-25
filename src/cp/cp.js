import { fork } from 'node:child_process';
import { join } from 'node:path';

const __dirname = import.meta.dirname;

const spawnChildProcess = async (args) => {
    fork(join(__dirname, 'files/script.js'), args);
};

spawnChildProcess(['1', 2]);
