import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { fork } from 'child_process';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const spawnChildProcess = async (args) => {
    const targetFilePath = path.join(__dirname, 'files', 'script.js');

    const cp = fork(targetFilePath, args);

    cp.on('message', (message) => {
        console.log('message', message)
    });

    cp.on('close', (code) => {
        console.log('close', code)
    });
};

// Put your arguments in function call to test this functionality
spawnChildProcess( ['someArgument1', 'someArgument2']);
