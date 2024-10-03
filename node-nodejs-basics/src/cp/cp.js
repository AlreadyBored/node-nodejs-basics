import { spawn } from 'child_process';

const spawnChildProcess = async (args) => {
    // Spawn a child process from the script.js file with the provided arguments
    const childProcess = spawn('node', ['./files/script.js', ...args]);

    // Pipe the master process stdin to the child process stdin
    process.stdin.pipe(childProcess.stdin);

    // Pipe the child process stdout to the master process stdout
    childProcess.stdout.pipe(process.stdout);
};

// Put your arguments in function call to test this functionality
spawnChildProcess(['arg1', 'arg2']);