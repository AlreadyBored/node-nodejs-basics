import { fileURLToPath } from 'node:url'
import { dirname } from 'node:path'
import { access } from 'node:fs/promises'
import { fork } from'node:child_process'

const spawnChildProcess = async (args) => {
    const pathToFile = '/files/script.js';

    const __filename = fileURLToPath(import.meta.url);
    const __dirname = dirname(__filename);

    try {
        await access(`${__dirname}${pathToFile}`);
    } catch {
        throw new Error('Error to access file');
    }

    const childProcess = fork(`${__dirname}${pathToFile}`, args, { silent: true });

    process.stdin.pipe(childProcess.stdin);
    childProcess.stdout.pipe(process.stdout);
};

// Put your arguments in function call to test this functionality
spawnChildProcess(  ['someArgument1', 'someArgument2', 'someArgument3'] );
