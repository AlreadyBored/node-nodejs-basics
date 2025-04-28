import path from 'path';
import { fileURLToPath } from 'url';
import {spawn } from 'child_process';

const spawnChildProcess = async (args) => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);

    const script = path.join(__dirname, 'files', 'script.js');

    const childProcess = spawn('node', [script, ...args], {
        stdio: ['pipe', 'pipe', 'pipe', 'ipc']
    });

    process.stdin.pipe(childProcess.stdin);
    childProcess.stdout.pipe(process.stdout);

    childProcess.on('error', error => {
        throw new Error('Child process error', error);
    });

    childProcess.on('exit', code => {
        console.log(`Child process exited with code ${code}`);
    });
};

spawnChildProcess(['someArgument1', 'someArgument2']);
