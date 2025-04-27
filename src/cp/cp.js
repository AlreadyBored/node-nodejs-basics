import { spawn } from 'child_process';

const spawnChildProcess = async (args) => {
    const child = spawn('node', ['src/cp/files/script.js', ...args]);

    process.stdin.on('data', (data) => {
        child.stdin.write(data);
    });

    child.stdout.on('data', (data) => {
        console.log(`stdout: ${data}`);
    });

    child.stderr.on('data', (data) => {
        console.error(`stderr: ${data}`);
    });

    child.on('close', (code) => {
        console.log(`child process exited with code ${code}`);
        process.exit(0);
    });
};

spawnChildProcess( [1, 2]);
