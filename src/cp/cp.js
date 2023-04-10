import { spawn } from 'child_process';

const spawnChildProcess = async (args) => {
    try {
        // Create a new child process using `script.js` as the script to run
        const childProcess = spawn('node', ['./files/script.js', ...args]);

        // Pipe the stdin and stdout of the child process to the master process
        childProcess.stdout.pipe(process.stdout);
        process.stdin.pipe(childProcess.stdin);

        // Log any errors from the child process to the console
        childProcess.on('error', (error) => {
            console.error(`Child process error: ${error}`);
        });
    } catch (err) {
        throw err;
    }
};

spawnChildProcess(['arg1', 'arg2', 'arg3']);
