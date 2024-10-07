import { spawn } from 'child_process';
import path from 'path';

// there was error about __dirname, get this solution from gpt
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const spawnChildProcess = async (args) => {
    // Write your code here
    const childProcessPath = path.resolve(__dirname, './script.js'); // Path to the child file

    const child = spawn('node', [childProcessPath, ...args], {
        stdio: 'inherit',
    });

    child.on('exit', (code) => {
        console.log(`Child process exited with code ${code}`);
    });
};

const args = ['arg1', 'arg2', 'arg3'];
spawnChildProcess(args);
