import { spawn } from 'child_process';
import path from 'path';
import { fileURLToPath } from 'url';
import { folderName } from '../constants.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export const spawnChildProcess = async (args) => {
    const file = path.join(__dirname, folderName, 'script.js');
    const child = spawn('node', [file, ...args]);
    process.stdin.pipe(child.stdin);

    child.stdout.on('data', (data) => {
        console.log('(MAIN)', `${data}`);
    });
      
    child.stderr.on('data', (data) => {
        console.error('(MAIN)', `Child process have stderr: ${data}`);
    });

    child.on('exit', function (code, signal) {
        console.log('(MAIN)', `Child process was closed with code ${code}`);
    });
};

spawnChildProcess([1, 2, 3]);