import { spawn } from 'child_process';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const spawnChildProcess = async (args) => {
    const __filename = fileURLToPath(import.meta.url),
          __dirname = dirname(__filename),
          pathToScript = './files/script.js';

    const childProcess = spawn('node', [join(__dirname, pathToScript), ...args], {
        stdio: ['pipe', 'pipe', 'inherit', 'ipc']
    });

    childProcess.stdout.pipe(process.stdout);
    process.stdin.pipe(childProcess.stdin);

    childProcess.on('error', (childprocessError) => {
        throw childprocessError;
    });

    return childProcess;
};

// Put your arguments in function call to test this functionality
spawnChildProcess(['balerina capuchina', 'some other meme from tik-tok']);
