import { exec, spawn, fork} from 'node:child_process';


import { fileURLToPath } from 'node:url';
import path, { dirname } from 'node:path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);


const spawnChildProcess = async (args) => {
    
    const pathToScript = path.join(__dirname, 'files', 'script.js');
    const script = spawn('node', [pathToScript, ...args]);

    process.stdin.on('data',  data => {
        script.stdin.write(data);
    });

    script.stdout.on('data', (data) => {
        console.log(data.toString());
    })

};

// Put your arguments in function call to test this functionality
spawnChildProcess( ['someArgument1', 'someArgument2']);

