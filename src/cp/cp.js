import { fork } from 'child_process';

const spawnChildProcess = async (args) => {
    const filePath    = new URL('files/script.js', import.meta.url);
    const forkProcess = fork(filePath, args);

    forkProcess.on('message', msg => {
        process.stdout.write(msg);
    })

    forkProcess.on('data', data => {
        forkProcess.send(data);
    })
};

spawnChildProcess(['args1', 'args2', 'args3']);