import path from "path";
import { spawn } from 'child_process';
import process from 'process';

const spawnChildProcess = async (args) => {
    args = args ?? [];
    const scriptPath = path.join(import.meta.dirname, 'files', 'script.js');
    const childProcess = spawn('node', [scriptPath, ...args], {
        stdio: ['pipe', 'pipe', 'pipe']
    });

    process.stdin.pipe(childProcess.stdin);

    childProcess.stdout.pipe(process.stdout);

    childProcess.on('exit', (code) => {
        console.log(`Child process exited with code: ${code}`);
    });
};

// Put your arguments in function call to test this functionality
spawnChildProcess( ['xfbxfbxfb', 'zzzzz'] );
