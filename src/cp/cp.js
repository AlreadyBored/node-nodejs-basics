// src/cp/cp.js
import { spawn } from 'child_process';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const spawnChildProcess = async (args) => {
    const scriptPath = path.join(__dirname, 'files', 'script.js');

    const child = spawn('node', [scriptPath, ...args], { stdio: ['pipe', 'pipe', process.stderr] });

    process.stdin.pipe(child.stdin);
    child.stdout.pipe(process.stdout);

    child.on('exit', (code) => {
        console.log(`Child exited with code ${code}`);
        process.exit(code);
    });

    child.on('error', (err) => {
        console.error('Failed to start child process:', err);
        process.exit(1);
    });
};

await spawnChildProcess(['1', '2', '3']);
