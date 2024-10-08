import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { spawn } from 'node:child_process'
import process from 'node:process';


const fileName = fileURLToPath(import.meta.url);
const __dirname = dirname(fileName);

const filePath = join(__dirname, 'files', 'script.js');

const spawnChildProcess = async (args) => {
    const childProcess = spawn('node', [filePath, ...args]);

    childProcess.stdout.on('data', (data) => process.stdout.write(data));

    process.stdin.pipe(childProcess.stdin);

};


spawnChildProcess( ['someArgument1', 'someArgument2'] );
