import { fork, spawn } from 'child_process';
// import { } from './files/script';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const forkProcess = fork(`${__dirname}/files/script.js`);

// const child = spawn('node', [`${__dirname}/files/script.js`]);

export const spawnChildProcess = async (args) => {
    // const [executer, file, ...rest] = process.argv;
    forkProcess.on('message', (message) => {
        console.log('get message = ', message);
    });

    // // forkProcess.spawnargs

    // forkProcess.on('close', (code) => {
    //     console.log('existed= ', code);
    // });

    forkProcess.send({process: {
        argv: args
    }});
};

spawnChildProcess(process.args)
