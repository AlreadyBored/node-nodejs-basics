import {spawn} from 'child_process';
import path from 'path';
import {fileURLToPath} from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const spawnChildProcess = async (args) => {
    const childProcess = spawn('node', [path.join(__dirname, 'files', 'script.js'), ...args], {
        stdio: ['pipe', 'pipe', 'pipe', 'ipc'],
    });

    childProcess.stdout.on('data', (data) => {
        process.stdout.write(data);
    });

    childProcess.stderr.on('data', (data) => {
        process.stderr.write(data);
    });

    childProcess.on('message', (message) => {
        if (message === 'CLOSE') {
            console.log('Received CLOSE message from child process. Closing child process and parent process.');
            childProcess.kill();
            process.exit(0);
        }
    });

    process.stdin.on('data', (data) => {
        childProcess.stdin.write(data);
    });

    process.stdin.on('end', () => {
        childProcess.stdin.end();
    });

    childProcess.on('exit', (code) => {
        console.log(`Child process exited with code ${code}`);
        process.exit(code);
    });
};

spawnChildProcess(['a', 'b', 'c']);