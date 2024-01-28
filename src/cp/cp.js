import { spawn } from 'child_process';
import path from 'path';
import { fileURLToPath } from 'url';
const spawnChildProcess = async (args) => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename)
    const pathToFile = path.join(__dirname, 'files', 'script.js')
    const child = spawn('node', [pathToFile, ...args], {
        stdio: ['pipe', 'pipe', 'pipe', 'ipc'],
    })
    process.stdin.pipe(child.stdin);
    child.stdout.pipe(process.stdout);
};

// Put your arguments in function call to test this functionality
spawnChildProcess(['someArgument1', 'someArgument2', 'someArgument3']);
