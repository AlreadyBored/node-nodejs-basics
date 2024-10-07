import { spawn } from 'child_process';
import { fileURLToPath } from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const spawnChildProcess = async (args) => {
    const child = spawn('node', [path.join(__dirname, 'files', 'script.js'), ...args]);
    process.stdin.pipe(child.stdin);
    child.stdout.pipe(process.stdout);

    child.on('exit', (code) => {
        console.log(`Child process has exited with code ${code}`);
    });
};

// Put your arguments in function call to test this functionality
spawnChildProcess(['dasha', 'hello']);
