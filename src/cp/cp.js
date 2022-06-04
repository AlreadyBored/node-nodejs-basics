import { spawn } from 'child_process';
import  * as path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
export const __filename = fileURLToPath(import.meta.url);
export const __dirname = dirname(__filename);

const argsFromParent = process.argv.slice(2);

export const spawnChildProcess = async (args) => {
    const fileNameChildProcess = 'script.js';
    const pathToFileNameChildProcess = path.join(__dirname, '/files', fileNameChildProcess);
    const child = spawn(process.execPath, [pathToFileNameChildProcess, ...args]);
    process.stdin.pipe(child.stdin);
    child.stdout.pipe(process.stdout);
};

spawnChildProcess(argsFromParent);
