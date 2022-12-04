import { fork } from 'child_process'

const spawnChildProcess = async (args) => {

    const childProcessFile = './src/cp/files/script.js';

    const child = fork(childProcessFile, args.split(' '));

    child.on('close', data => {
        console.log('Child process closed with exit code: ', data);
    })

};

spawnChildProcess('arg0 arg1 arg2');