import { spawn, fork } from 'node:child_process';

const spawnChildProcess = async (args) => {
    const childProcess = spawn('node', ['./files/script.js', 'test'], {
        stdio: [null, null, null, 'ipc'],
    });

    process.stdin.on('data', (data) => {
        childProcess.stdin.write(data);
    });

    childProcess.on('message', (m) => {
        process.stdout.write(`Received from child process: ${m}`);
    });

    childProcess.stdout.on('data', (data) => {
        process.stdout.write(data);
    });
};

spawnChildProcess();
