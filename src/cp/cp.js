import { dirname, join } from 'node:path';
import { spawn } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));

export const spawnChildProcess = async (args) => {
    const scriptPath = join(__dirname, 'files/script.js');
    const child = spawn('node', [scriptPath, ...args], {
        stdio: ['pipe', 'pipe', 'inherit', 'ipc']
    });

    process.stdin.pipe(child.stdin);
    child.stdout.pipe(process.stdout);

    return new Promise((resolve, reject) => {
        child.on('exit', (code) => {
            if (code === 0) resolve();
            else reject(new Error(`Child exited with code ${code}`));
        });
    });
};

// Put your arguments in function call to test this functionality
// spawnChildProcess( /* [someArgument1, someArgument2, ...] */);
spawnChildProcess(['--input', 'test', '--mode', 'development']);
