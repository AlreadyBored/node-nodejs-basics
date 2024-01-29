import { fork } from 'node:child_process';

const url = new URL('./files/script.js', import.meta.url);

const spawnChildProcess = async (args) => {
    const childProcess = fork(url, args, { silent: true });

    process.stdin.pipe(childProcess.stdin);
  
    childProcess.stdout.pipe(process.stdout);
};

// Put your arguments in function call to test this functionality
spawnChildProcess(['arg1', 'arg2', 'arg3']);
