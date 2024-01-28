import { fork } from 'child_process';

import { getPath } from '../../utils/get.path.js';

const spawnChildProcess = async (args) => {
    const filePath = getPath(import.meta.url, './files/script.js');

    const childProcess = fork(filePath, args, { silent: true });

    process.stdin.pipe(childProcess.stdin);
    childProcess.stdout.pipe(process.stdout);
};

// Put your arguments in function call to test this functionality
spawnChildProcess(['RS_SCHOOL', 7, 10, 'someArgument', 'Hello world!']);
