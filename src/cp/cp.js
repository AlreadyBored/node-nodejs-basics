import path from "path";
import { spawn } from "child_process";
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const spawnChildProcess = async (args) => {
    const filePath = path.join(__dirname, 'files', 'script.js');

    const childProcess = spawn(
        'node',//The command to run
        [filePath, ...args],//List of string arguments.
        { stdio: ['pipe', 'pipe', 'pipe']});

    //node files/script.js arg1 arg2

    process.stdin.pipe(childProcess.stdin);

    childProcess.stdout.on('data', (data) => {
        process.stdout.write(data);
    });


    childProcess.on('exit', (code, signal) => {
        console.log(`Child process exited with code ${code} and signal ${signal}`);
        process.exit(0);
    });
};

// Put your arguments in function call to test this functionality
spawnChildProcess([156464, "simple arg"]);
