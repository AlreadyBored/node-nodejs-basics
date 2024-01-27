import { spawn } from 'node:child_process';
import path from 'node:path';

const spawnChildProcess = async (args) => {
    const childPath = path.join('cp', 'files', 'script.js');
    const child = spawn(`node ${childPath}`, args, { shell: true, encoding: 'utf8' });
    process.stdin.pipe(child.stdin);
    child.stdout.pipe(process.stdout);
};

// Put your arguments in function call to test this functionality
spawnChildProcess( /* [someArgument1, someArgument2, ...] */);
