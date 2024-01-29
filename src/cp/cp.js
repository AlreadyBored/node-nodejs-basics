import { spawn } from 'node:child_process';
import { getNecessaryPathInCurrentDir } from '../utils/helpers/path.helper.js';

const path = getNecessaryPathInCurrentDir(import.meta.url, '/files/script.js');

const spawnChildProcess = async (args) => {
    const child = spawn('node', [path, ...args], {
        stdio: ['pipe', 'pipe', 'pipe', 'ipc'], // Creating IPC channel
    });

    // Forwarding stdin data to child process
    // process.stdin.pipe(child.stdin);

    process.stdin.on('data', (data) => {
        child.stdin.write(data.toString());
    });

    // Forwarding stdout data from child process
    child.stdout.on('data', (data) => {
        console.log(data.toString());
        // process.stdout.write(`Child Process: ${data}`);
    });

    return child;
};

const args = ['arg1', 'arg2', 'arg3'];

// Put your arguments in function call to test this functionality
await spawnChildProcess(args);
