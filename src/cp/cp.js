import { spawn } from 'node:child_process';
import path from 'path';
const spawnChildProcess = async (args) => {
    const scriptPath = path.resolve('src', 'cp', 'files', 'script.js');
    const child = spawn('node', [scriptPath, ...args]);

    child.stderr.on('data', (data) => {
        console.error(`stderr: ${data}`);
    });

    child.on('close', (code) => {
        console.log(`child process exited with code ${code}`);
    });

    process.stdin.pipe(child.stdin);
    child.stdout.pipe(process.stdout);

    process.stdout.on('data', (data) => {
        console.log('Main process recived data from child process: ', data.toString());
    })
};

// Put your arguments in function call to test this functionality
spawnChildProcess([1, 2, 3, 4]);
