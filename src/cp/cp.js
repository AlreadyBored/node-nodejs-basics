import { spawn } from 'child_process';
import path from 'path';
import { fileURLToPath } from 'url';

const spawnChildProcess = async (args) => {
    const __dirname = path.dirname(fileURLToPath(import.meta.url));
    const scriptPath = path.join(__dirname, 'files', 'script.js');
    const child = spawn('node', [scriptPath, ...args]);

    process.stdin.pipe(child.stdin);
    child.stdout.pipe(process.stdout);

    child.on('error', (error) => {
        console.error('Failed to execute child process', error);
    });

    child.on('exit', (code, signal) => {
        console.log(`Child process executed with the code: ${code} and signal: ${signal}`);
    });
};

const args = ['arg1', 'arg2', 'arg3', 'arg4'];

await spawnChildProcess(args);
