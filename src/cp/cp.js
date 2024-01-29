import {fork} from 'node:child_process';
import {resolve} from 'node:path';

const spawnChildProcess = async (args) => {
    // Write your code here
    const scriptPath = resolve('src', 'cp', 'files', 'script.js');

    const options = {stdio: ['inherit', 'pipe', 'ignore', 'ipc']};

    const child = fork(scriptPath, args, options);
    
    child.stdout.on('data', (data) => console.log(data.toString()));
}
// Put your arguments in function call to test this functionality
spawnChildProcess(['arg1', 'arg2', 'arg3']);
