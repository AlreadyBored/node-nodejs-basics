import { spawn } from 'child_process';
import { join } from 'path';

const spawnChildProcess = async (args) => {
    const scriptPath = join(import.meta.dirname, 'files', 'script.js');
    const child = spawn('node', [scriptPath, ...args], {
        stdio: ['pipe', 'pipe', 'inherit']
    });

    process.stdin.pipe(child.stdin);

    child.stdout.pipe(process.stdout);
};

spawnChildProcess(['arg1', 'arg2']);
