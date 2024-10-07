import { spawn } from'child_process';
import path from "path";

const spawnChildProcess = async (args) => {
    const pathToScript = path.join(process.cwd(), 'src/cp/files/script.js');

    const child = spawn('node', [pathToScript, ...args], {
        stdio: ['pipe', 'pipe', 'inherit']
    });

    child.on('error', (error) => {
        reject(`Failed to start child process: ${error.message}`);
    });

    process.stdin.pipe(child.stdin);
    child.stdout.pipe(process.stdout);

    child.on('exit', (code) => {
        resolve(`Child process exited with code ${code}`);
    });
};

// Put your arguments in function call to test this functionality
spawnChildProcess(['someArgument1', 'someArgument2']);
