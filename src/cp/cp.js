import { fork } from 'node:child_process';
import { dirname,join } from 'node:path';
import { fileURLToPath } from 'node:url';

const spawnChildProcess = async (args) => {
    const __dirname = dirname(fileURLToPath(import.meta.url));
    const targetFile = join(__dirname,'/files/script.js');
    const child = fork(targetFile, args);

};

// Put your arguments in function call to test this functionality
spawnChildProcess(  ['someArgument1', 'someArgument2', 'someArgument3']);
