import path from 'path';
import { fileURLToPath } from 'url';
import { fork } from 'child_process';

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);
const scriptPath = path.join(dirname, 'files', 'script.js');

export const spawnChildProcess = async (args) => {
    const child = fork(scriptPath, args, {silent: true});

    process.stdin.pipe(child.stdin);
    child.stdout.pipe(process.stdout);
};

await spawnChildProcess(process.argv.slice(2));