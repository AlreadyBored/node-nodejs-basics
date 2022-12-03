import { spawn } from 'node:child_process';

const spawnChildProcess = async (args) => {
    const childProcess = spawn('node', ['./files/script.js', ...args]);

    childProcess.stdout.on('data', (data) => {
        console.log('out', data.toString());
    });

    process.stdin.pipe(childProcess.stdin);

    childProcess.stderr.on('data', (data) => {
        console.error(data.toString());
    });

    childProcess.on('close', (code) => {
        console.log(`child process exited with code ${code}`);
    });
};

spawnChildProcess(process.argv.slice(2));