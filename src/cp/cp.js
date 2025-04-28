import {fileURLToPath} from 'url';
import {dirname, join} from 'path';
import {fork} from 'child_process';

const spawnChildProcess = async (args) => {
    // Write your code here
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = dirname(__filename);
    const childProcessPath = join(__dirname, 'files', 'script.js');

    const childProcess = fork(childProcessPath, args, {
        stdio: ['pipe', 'pipe', 'inherit', 'ipc']
    });

    process.stdin.pipe(childProcess.stdin);
    childProcess.stdout.pipe(process.stdout);
};

// Put your arguments in function call to test this functionality
spawnChildProcess( /* [someArgument1, someArgument2, ...] */);
