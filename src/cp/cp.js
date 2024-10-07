import child from 'node:child_process';
import path from 'node:path';


const spawnChildProcess = async (args) => {
    const cProcess = path.resolve('src', 'cp', 'files', 'script.js');
    const argsTest = ['arg1', 'arg2', 'arg3'];

    const childProcess = child.fork(cProcess, argsTest);

    childProcess.on('message', (msg) => {
        console.log(msg);
    });

    childProcess.on('close', (code) => {
        console.log(`Child process exit with code ${code}`);
    });



};



spawnChildProcess();