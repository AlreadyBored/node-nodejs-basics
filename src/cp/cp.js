import { spawn } from 'child_process';

const spawnChildProcess = async (args = []) => {
    const child = spawn('node', ['src/cp/files/script.js', ...args], {
        stdio: [process.stdin, process.stdout, process.stderr, 'ipc']
    });

    child.on('error', (error) => {
        console.error(`Error: ${error}`);
    });

    child.on('exit', (code, signal) => {
        console.log(`Child process exited with code ${code} and signal ${signal}`);
    });

    child.on('message', (message) => {
        console.log(`Message from child: ${message}`);
    });
};

// Put your arguments in function call to test this functionality
spawnChildProcess(["Hello", "from the other side", "can you hear me"]);
