import { execFile } from 'child_process'

import path from 'path';
const __dirname = path.dirname(process.argv[1]);


export const spawnChildProcess = async (args) => {
    try {
        const { stdout, stdin } = execFile(`node`, [ path.join(__dirname, '/files/script.js'), ...args], console.log);
        process.stdin.pipe(stdin)
        stdout.pipe(process.stdout)
    } catch {

    }
};

// spawnChildProcess();