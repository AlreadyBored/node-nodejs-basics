import { fileURLToPath } from 'node:url';
import path from 'node:path';
import { spawn } from 'node:child_process';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const spawnChildProcess = async (args) => {
    // Write your code here 
   const childProcess = spawn('node', [`${__dirname}/files/script.js`, args]);

   childProcess.stdout.pipe(process.stdout);
   process.stdin.pipe(childProcess.stdin);
};

spawnChildProcess();