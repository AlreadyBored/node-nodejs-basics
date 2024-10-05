import { spawn } from 'child_process';

const spawnChildProcess = async (args) => {
    const child = spawn('node', ['files/script.js', ...args], {
        stdio: ['pipe', 'pipe', 'inherit'], // Setting up IPC
    });

    process.stdin.pipe(child.stdin);

    child.stdout.pipe(process.stdout);
};

spawnChildProcess(['arg1', 'arg2']);
