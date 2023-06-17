import { fork } from 'child_process';
import { fileURLToPath } from 'url';
import path, { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const fileForChildProcess = path.join(__dirname, 'files', "script.js")

const spawnChildProcess = async (args) => {
    const subProcess = fork(fileForChildProcess, args, { silent: true });

    process.stdin.on('data', (data) => {
        subProcess.stdin.write(data.toString());
    });

    subProcess.stdout.on('data', (data) => {
        process.stdout.write(data)
    });
    
};

// Put your arguments in function call to test this addfunctionality
spawnChildProcess(['testarg1' , 'testarg2']);
