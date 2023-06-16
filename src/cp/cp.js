import { spawn } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const scriptPath = path.join(__dirname, 'files', 'script.js');

const spawnChildProcess = async (args) => {
    const child = spawn('node', [scriptPath, ...args], {
        stdio: ['pipe', 'pipe', process.stderr, 'ipc'],
    });

    child.stdout.on('data', (data) => {
        process.stdout.write(`Received from child process: ${data.toString()}`);
    });

    process.stdin.on('data', (data) => {
        child.stdin.write(data);
    });

    process.stdin.on('end', () => {
        child.stdin.end();
    });

    child.on('exit', (code) => {
        console.log(`Child process exited with code ${code}`);
    });
};

// Put your arguments in function call to test this functionality
spawnChildProcess(['someArgument1', 'someArgument2']);
