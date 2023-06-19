import { fork } from 'child_process';
import { fileURLToPath } from 'url';
import path, { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const spawnChildProcess = async (...args) => {
    const cp = fork(path.join(__dirname, 'files', 'script.js'), args);
};

spawnChildProcess(3, 14);
