import { spawn } from 'child_process';
import { join } from 'path';
import { getDirAndFilePath } from '../helpers.js';

const { __dirname } = getDirAndFilePath(import.meta);

export const spawnChildProcess = async (args) => {
    const childProcess = spawn(
        'node',
        [join(__dirname, 'files', 'script.js'), ...args],
        {stdio: 'pipe'}
    );

    process.stdin.pipe(childProcess.stdin);
    childProcess.stdout.pipe(process.stdout);
};

spawnChildProcess(['Hello', 'world']);