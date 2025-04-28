import { spawn } from 'child_process';

const spawnChildProcess = async (args) => {
    // Write your code here
    const child = spawn('node', ['files/script.js', ...args]);

    process.stdin.pipe(child.stdin);

    child.stdout.pipe(process.stdout);

    child.stderr.pipe(process.stderr);

};

// Put your arguments in function call to test this functionality
spawnChildProcess(['argument1', 'argument2', 'argument3']);
