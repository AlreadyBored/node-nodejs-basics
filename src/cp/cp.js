import { spawn } from 'node:child_process';
import path from 'node:path';

const spawnChildProcess = async (args) => {
    const fileName = path.join(process.cwd(), 'src/cp/files/script.js');

    const child = spawn(process.argv[0], [fileName]);

    process.stdin.on('data', (data) => {
        child.stdin.write(data);
    });

    child.stdout.on('data', (chunk) => {
        process.stdout.write(
            `Received from child process: ${chunk.toString()}\n`
        );
    });
};

// Put your arguments in function call to test this functionality
spawnChildProcess(/* [someArgument1, someArgument2, ...] */);
