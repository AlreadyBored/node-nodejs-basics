import { fork } from 'child_process';

export const spawnChildProcess = async (args) => {
    args = process.argv.slice(2);

    const child = fork("./files/script.js", args);

    child.on('message', message => {
        console.log(message);
    })
};