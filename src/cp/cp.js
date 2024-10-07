import { fork } from 'child_process';
import __dirname from './__dirname.js';
import path from 'path';

const file = path.join(__dirname,'files', 'script.js')

const spawnChildProcess = async (args) => {
    const forkProcess = fork(file, args, {silent: true})

    process.stdin.on('data', data => {
        forkProcess.stdin.write(data)
    })

    forkProcess.stdout.on('data', msg => {
        console.log("parent " + msg)
    })
};

// Put your arguments in function call to test this functionality
await spawnChildProcess( ['someArgument1', 'someArgument1']);
