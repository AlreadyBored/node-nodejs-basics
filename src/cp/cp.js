import { spawn } from 'child_process';
import { stdin, stdout } from 'process';
import path from 'path';
const spawnChildProcess = async (args) => {
    const parentFilePath = path.join(import.meta.dirname, 'files', 'script.js');
    const child = spawn('node', [parentFilePath, ...args]);
    stdin.pipe(child.stdin);
    child.stdout.pipe(stdout);
};

// Put your arguments in function call to test this functionality
spawnChildProcess( ['someArgument1', 'someArgument2', 'someArgument3']);
