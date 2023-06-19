import { fork } from 'child_process'

const spawnChildProcess = async (args) => {

    fork('./src/cp/files/script.js', args, {
        stdio: ['inherit', 'inherit', 'inherit', 'ipc']
    });
};

spawnChildProcess(['arg1', 'arg2', 'arg3', 'arg4']);
