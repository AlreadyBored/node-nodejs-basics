import { spawn } from 'child_process';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const scriptFile = join(__dirname, 'files', "script.js");

const spawnChildProcess = async (args) => {
    const childProcess = spawn('node', [scriptFile, ...args]);
    process.stdin.pipe(childProcess.stdin);
    childProcess.stdout.on('data', (data) => {
        process.stdout.write(data);
    });
};

// Put your arguments in function call to test this functionality
spawnChildProcess( /* [someArgument1, someArgument2, ...] */);
