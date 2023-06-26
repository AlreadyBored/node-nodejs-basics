import { spawn } from 'child_process';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const spawnChildProcess = async (args) => {
    const path = `${__dirname}/files/script.js`;
    const allArgs = [path, ...args.split(' ')];

    const childProcess = spawn('node', allArgs);

    process.stdin.on('data', (value) => {
       childProcess.stdin.write(value);
    });

    childProcess.stdout.on('data', (value) => {
        console.log(value.toString());
    });

    childProcess.on('exit', () => {
        process.exit(0);
    })
};

await spawnChildProcess('--version');
