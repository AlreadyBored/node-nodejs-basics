import path from 'path';
import { fork } from 'child_process';
import { fileURLToPath } from 'url';

const spawnChildProcess = async (args) => {
    // Write your code here
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);
    const scriptFile = path.join(__dirname, 'files', 'script.js');

    const cp = fork(scriptFile, args, {silent: false});

    cp.on('message', (message) => {
      console.log(`Received from child process: ${message}`);
    });

    cp.on('close', (code) => {
      console.log(`Child process exited with code ${code}`);
    });
};

// Put your arguments in function call to test this functionality
spawnChildProcess( ['q','w','e']);
