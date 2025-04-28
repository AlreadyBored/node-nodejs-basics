import { spawn } from 'node:child_process';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const spawnChildProcess = async (args) => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = dirname(__filename);
    
    const scriptPath = join(__dirname, "files", 'script.js');
    
    return new Promise((resolve) => {
        const childProcess = spawn('node', [scriptPath, ...args], {
            stdio: ['inherit', 'inherit', 'inherit']
        });
        
        childProcess.on('close', (code) => {
            console.log(`Child process exited with code ${code}`);
            resolve();
        });
    });
};

spawnChildProcess(['arg1', 'arg2']);
