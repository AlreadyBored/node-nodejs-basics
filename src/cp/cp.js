import {spawn} from 'child_process'
import { fileURLToPath } from 'url';
import path from 'path';
const spawnChildProcess = async (args) => {
    const __dirname = path.dirname(fileURLToPath(import.meta.url));
    const scriptStart=path.join(path.join(__dirname, 'files'),'script.js')
    const childProcess=spawn('node',[scriptStart, ...args],{
        stdio: ['pipe', 'pipe', 'pipe', 'ipc']
    });

    process.stdin.pipe(childProcess.stdin);

    childProcess.stdout.pipe(process.stdout);
};

spawnChildProcess(['sssss','sqwdwq']);
