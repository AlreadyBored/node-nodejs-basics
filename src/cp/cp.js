import { fork } from 'node:child_process';
import { fileURLToPath } from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __childFile = path.dirname(__filename) + '/files/script.js';

const spawnChildProcess = async (args) => {
    fork(__childFile, args);
};

spawnChildProcess();