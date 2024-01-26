import { argv, stdin } from 'node:process';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { spawn } from 'node:child_process';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const filePath = join(__dirname, 'files', 'script.js');

const spawnChildProcess = async (args) => {
    const childProcess = spawn('node', [filePath, ...args], { stdio: [stdin, 'pipe'] });

    childProcess.stdout.on('data', (data) => {
        console.log(`Received from child process:\n${data}`);
    });

    childProcess.on('spawn', () => {
        console.log('Spawn child process!');
    });
};

// Put your arguments in function call to test this functionality
spawnChildProcess(argv.slice(2));
