import { spawn } from 'child_process';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const spawnChildProcess = async (args) => {
    const filePath = path.resolve(__dirname, 'files', 'script.js');
    const child = spawn('node', [filePath, ...args]);

    process.stdin.setEncoding('utf-8');
    process.stdout.setEncoding('utf-8');
    child.stdin.setEncoding('utf-8');
    child.stdout.setEncoding('utf-8');

    process.stdin.pipe(child.stdin);

    child.stdout.on('data', (data) => {
        console.log(data);
        process.stdout.write(data);
    });

    child.stderr.on('data', (data) => {
        console.error(`Child process stderr: ${data}`);
    });

    child.on('error', (error) => {
        console.error(`Child process error: ${error}`);
    });

    child.on('close', (code) => {
        console.log(`Child process exited with code ${code}`);
    });
};

const args = ["someArgument1", "someArgument2"];
spawnChildProcess( args );
