import { spawn } from 'child_process';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
// ['-lh', '/usr']
const spawnChildProcess = async (args) => {
    const path = `${__dirname}/script.js`;
    const allArgs = [path, ...args];

    const childProcess = spawn('node', allArgs);

    process.stdin.on('data', (value) => {
       childProcess.stdin.write(value);
    });

    childProcess.stdout.on('data', (value) => {
        process.stdout.read(value);
    });
};

await spawnChildProcess( []);
