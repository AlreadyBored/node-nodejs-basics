import path from 'path';
import { fileURLToPath } from 'url';
import { fork } from 'child_process';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const spawnChildProcess = async (args) => {
    const scriptFile = path.join(__dirname,'files','script.js');
    const cp = fork(scriptFile,args);
    cp.on('close', (code) => {
        console.log(`Child process exited with code ${code}`);
    });
};

// Put your arguments in function call to test this functionality
spawnChildProcess(['a', 'b', 'c', 'd']);
