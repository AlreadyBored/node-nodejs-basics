import { spawn } from 'child_process';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
const fileName = fileURLToPath(import.meta.url);
const dirName = dirname(fileName);
const path = join(dirName, 'files', 'script.js');

const spawnChildProcess = async (args) => {
    const child = spawn('node', [path, ...args], {
        stdio: ['pipe', 'pipe', 'inherit']
    });
    process.stdin.pipe(child.stdin);
    child.stdout.pipe(process.stdout);
}

spawnChildProcess(['someArgument1', 'someArgument2', 'someArgument3']);
