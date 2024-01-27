import path from 'path';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { spawn } from 'child_process';

const currentFolder = dirname(fileURLToPath(import.meta.url));
const pathToScript = path.join(currentFolder, 'files', 'script.js');

const spawnChildProcess = async (args) => {
    
    const child =spawn('node', [pathToScript, ...args]);

    process.stdin.pipe(child.stdin);
    child.stdout.pipe(process.stdout);
};

// Put your arguments in function call to test this functionality
spawnChildProcess([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
