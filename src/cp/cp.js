const { spawn } = require('child_process');
const readline = require('readline');

const spawnChildProcess = async (args) => {
    const child = spawn('node', ['./script.js', ...args]);

    const rl = readline.createInterface({
        input: process.stdin,
        output: child.stdin
    });

    rl.on('line', (input) => {
        child.stdin.write(input + '\n');
    });

    child.stdout.on('data', (data) => {
        process.stdout.write(data);
    });

    child.on('error', (err) => {
        console.error(`Error spawning child process: ${err.message}`);
    });

    child.on('exit', (code) => {
        console.log(`Child process exited with code ${code}`);
    });
};

spawnChildProcess(['arg1', 'arg2']);
