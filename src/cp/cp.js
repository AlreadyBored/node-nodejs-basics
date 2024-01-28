import { spawn } from 'child_process';
import path from 'path';

const spawnChildProcess = async (args) => {
    const scriptPath = path.join('src', 'cp', 'files', 'script.js');
    const childProcess = spawn('node', [scriptPath, ...args], { stdio: ['pipe', 'pipe', 'inherit'] });

    process.stdin.pipe(childProcess.stdin);

    childProcess.stdout.on('data', (data) => {
        process.stdout.write(`Received from child process: ${data.toString()}\n`);
    });

    await new Promise((resolve) => {
        process.on('exit', () => {
            childProcess.stdin.write('CLOSE');
            childProcess.stdin.end();
            resolve();
        });
    });
};

// Put your arguments in function call to test this functionality
spawnChildProcess( ['someArgument1', 'someArgument2']);
