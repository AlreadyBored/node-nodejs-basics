import { spawn } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const spawnChildProcess = async (args) => {
    const PATH = join(__dirname, 'files/script.js');

    const childProcess = spawn('node', [PATH, ...args]);

    childProcess.stdout.pipe(process.stdout);
    process.stdin.pipe(childProcess.stdin);
}

spawnChildProcess(['arg0', 'arg1']);
