import { spawn } from 'child_process';
import path from 'path';

const __dirname = import.meta.dirname;
const folderName = 'files'
const fileName = 'script.js'
const filePath = path.join(__dirname, folderName, fileName)

const spawnChildProcess = (args) => {
    const childProcess = spawn('node', [filePath, ...args]);

    process.stdin.pipe(childProcess.stdin);
    childProcess.stdout.on('data', (data) => {
        process.stdout.write(`Received from child process: ${data.toString()}`);
    });

    childProcess.stderr.on('data', (data) => {
        console.error(`Error from child process: ${data.toString()}`);
    });

    childProcess.on('exit', (code, signal) => {
        console.log(`Child process exited with code ${code} and signal ${signal}`);
        process.exit(0);
    });
};

spawnChildProcess(['arg1', 'arg2', 'arg3']);

