import path from 'path';
import { fileURLToPath } from 'url';
import { fork } from 'child_process'


const spawnChildProcess = async () => {
    const currentPath = path.dirname(fileURLToPath(import.meta.url));
    const filePath = currentPath + '/files/script.js';

    const processArgs = process.argv.splice(2);
    const child = fork(filePath, processArgs, { silent: true });

    process.stdin.pipe(child.stdin);
    child.stdout.pipe(process.stdout);

    child.stdout.on('data', data => {
        process.stdout.write(data);
    })
};

spawnChildProcess();