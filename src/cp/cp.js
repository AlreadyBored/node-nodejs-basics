import { spawn } from 'node:child_process';
import path from 'path';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
const spawnChildProcess = async (args) => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = dirname(__filename);
    const child = spawn('node', [path.resolve(__dirname, 'files/script.js'), ...args], {
        stdio: ['pipe', 'pipe', 'inherit'] 
    });
    process.stdin.pipe(child.stdin);
    child.stdout.pipe(process.stdout);
};

spawnChildProcess( ['foo', 'bar']);
