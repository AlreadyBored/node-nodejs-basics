import { spawn } from 'child_process';
import path from 'path';

import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


const spawnChildProcess = (args) => {
  const scriptPath = path.join(__dirname, 'files', 'script.js');

  // Create a child process and pass arguments
  const child = spawn('node', [scriptPath, ...args], {
    stdio: ['pipe', 'pipe', 'inherit', 'ipc'],
  });

  // Forward the parent process' input to the child's stdin
  process.stdin.pipe(child.stdin);

  // Pipe child's output to the parent process' stdout
  child.stdout.pipe(process.stdout);

  // Handle child process exit
  child.on('exit', (code) => {
    console.log(`Child process exited with code ${code}`);
  });
};

// Example usage:
spawnChildProcess(['arg1', 'arg2']);
