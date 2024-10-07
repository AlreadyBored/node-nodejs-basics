import { spawn } from 'child_process';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const spawnChildProcess = async (args) => {
    const pathToScript = path.join(__dirname, 'files', 'script.js');
    const spawnProcessScript = spawn('node', [pathToScript, ...args], {
        stdio: ['pipe', 'pipe', 'pipe', 'ipc']
    });
    process.stdin.pipe(spawnProcessScript.stdin)
    spawnProcessScript.stdout.pipe(process.stdout)
};

// Put your arguments in function call to test this functionality
spawnChildProcess( ["someArgument1", "someArgument2", ] );
