import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import { fork } from 'child_process';
import { stdin, stdout } from 'process';

const spawnChildProcess = async () => {
    const childFile = join(dirname(fileURLToPath(import.meta.url)), 'files', 'script.js');
    const args = process.argv;

    const child = fork(childFile, args, {
        stdio: ['pipe', 'pipe', 'pipe', 'ipc'],
    });
    stdin.pipe(child.stdin);
    child.stdout.pipe(stdout);
};

// Put your arguments in function call to test this functionality
spawnChildProcess('arg1', 'arg2', 'arg3');
