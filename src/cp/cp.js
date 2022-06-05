import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
import { fork } from 'child_process';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const scriptPath = path.join(__dirname, 'files', 'script.js');

export const spawnChildProcess = async (args) => {
    const child = fork(scriptPath, args, {silent: true});

    process.stdin.pipe(child.stdin);
    child.stdout.pipe(process.stdout);
};