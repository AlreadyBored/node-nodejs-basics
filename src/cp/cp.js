import { spawn } from 'child_process';
import { join } from 'path';
import { fileURLToPath } from 'url';

const __dirname = fileURLToPath(new URL('.', import.meta.url));

const spawnChildProcess = async (args) => {
    const scriptPath = join(__dirname, 'files', 'script.js');
    
    const child = spawn('node', [scriptPath, ...args], {
        stdio: ['pipe', 'pipe', 'pipe']
    });

    process.stdin.pipe(child.stdin);

    child.stdout.pipe(process.stdout);

    child.stderr.pipe(process.stderr);

    return new Promise((resolve, reject) => {
        child.on('close', (code) => {
            if (code === 0 || code === 58) {
                resolve();
            } else {
                reject(new Error(`Child process exited with code ${code}`));
            }
        });

        child.on('error', reject);
    });
};

await spawnChildProcess(['arg1', 'arg2']);
