import { spawn } from 'node:child_process';

const spawnChildProcess = async (args) => {
    const childProcess = spawn('node', ['script.js', ...args], {
        stdio: ['pipe', 'pipe', 'pipe', 'ipc']
    });

    process.stdin.pipe(childProcess.stdin);
    childProcess.stdout.pipe(process.stdout);

    childProcess.on('exit', (code, signal) => {
        console.log(`Child process exited with code ${code} and signal ${signal}`);
        process.exit();
    });

    childProcess.on('error', (err) => {
        console.log(err.message);
        process.exit(1);
    });
};

spawnChildProcess([ 'someArgument1', 'someArgument2' ]);
