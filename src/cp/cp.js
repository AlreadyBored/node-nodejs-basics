import { fork } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import { stdin, stdout } from 'node:process';

const spawnChildProcess = async (args) => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = dirname(__filename);
    const scriptPath = join(__dirname, 'files/script.js');

    const childProcess = fork(scriptPath, args, { stdio: ['pipe', 'pipe', 'pipe', 'ipc']});

    stdin.pipe(childProcess.stdin);

    childProcess.stdout.pipe(stdout);

    stdin.on('data', (data) => {
        childProcess.send({ cmd: 'echo', message: data });
    });
};

// Put your arguments in function call to test this functionality
spawnChildProcess(['arg 1', 'arg 2']);
