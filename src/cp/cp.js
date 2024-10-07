import { spawn } from 'child_process';

const spawnChildProcess = async (args) => {
    const cp = spawn('node', ['./files/script.js', args]);

    cp.stdout.on('data', (data) => {
        process.stdout.write(data);
    });

    process.stdin.on('data', (data) => {
        cp.stdin.write(data);
    });

};

spawnChildProcess( ["arg1", "arg2"] );
