import {spawn} from 'child_process'
import path from 'path';
import { fileURLToPath } from 'url';
const spawnChildProcess = async (args) => {
    // Write your code here
    const __dirname = path.dirname(fileURLToPath(import.meta.url));
    const child = spawn('node', [path.join(__dirname, 'files', 'script.js'), ...args], {
        stdio: [process.stdin, process.stdout]
    });
    
    child.on('error', (error) => {
        console.error('Error in child process:', error);
    });

    child.on('exit', (code, signal) => {
        console.log(code, signal);
    });
};

// Put your arguments in function call to test this functionality
spawnChildProcess([1, 2, 3, 4, 5, 6, 7, 8, 9]);
