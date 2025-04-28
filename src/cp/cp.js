import { spawn } from 'child_process';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const DIRNAME = dirname(fileURLToPath(import.meta.url));

export const spawnChildProcess = async (args) => {
    const scriptPath = join(DIRNAME, 'files', 'script.js');

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
