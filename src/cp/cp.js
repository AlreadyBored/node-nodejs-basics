import {spawn} from 'node:child_process';
import path from "path";
import {fileURLToPath} from "url";

const spawnChildProcess = async (args) => {
    const __dirname = path.dirname(fileURLToPath(import.meta.url));
    const childProcess = spawn(
        'node',
        [`${__dirname}/files/script.js`, ...args]
    );

    process.stdin.pipe(childProcess.stdin);
    childProcess.stdout.pipe(process.stdout);
};

// Put your arguments in function call to test this functionality
await spawnChildProcess(['--child', '--spawn']);
