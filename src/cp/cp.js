import { spawn } from 'node:child_process';
import {stdin, stdout} from 'node:process';

const spawnChildProcess = async (args) => {
    const path = './src/cp/files/script.js'
    const node = spawn('ls', [path, ...args]);

    node.stdout.on('data', (data) => {
        console.log(`stdout: ${data}`);
    });
    stdin.pipe(node.stdin)
    node.stderr.on('data', (data) => {
        console.error(`stderr: ${data}`);
    });
    stdout.pipe(node.stdout)
    node.on('close', (code) => {
        console.log(`child process exited with code ${code}`);
    });
};

spawnChildProcess(['tewte', '47457']);