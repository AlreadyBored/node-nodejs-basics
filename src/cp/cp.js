import { spawn } from 'child_process';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const spawnChildProcess = async (args) => {
    const child = spawn('node', [join(__dirname,'files', 'script.js'), ...args], {
        stdio: ['pipe', 'pipe', 'inherit'] 
      });
      process.stdin.pipe(child.stdin);
      child.stdout.pipe(process.stdout);
};

// Put your arguments in function call to test this functionality
spawnChildProcess(['arg1', 'arg2']);
