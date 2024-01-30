import { spawn } from 'child_process';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const currentFileUrl = import.meta.url;
const currentDir = dirname(fileURLToPath(currentFileUrl));
const scriptPath = join(currentDir, 'files', 'script.js');

const spawnChildProcess = async (args) => {
  // Spawn a child process for script.js
  const childProcess = spawn('node', [scriptPath, ...args], {
    stdio: ['pipe', 'pipe', 'pipe', 'ipc'] // Creating IPC channels
  });

  // Set up communication with the child process
  process.stdin.pipe(childProcess.stdin);
  childProcess.stdout.pipe(process.stdout);

  // Capture and print standard error output
  childProcess.stderr.on('data', (data) => {
    console.error(`Child process stderr: ${data}`);
  });

  // Handle the exit event of the child process
  childProcess.on('exit', (code, signal) => {
    console.log(`Child process exited with code ${code} and signal ${signal}`);
    process.exit(code); // Exit the master process with the same code
  });
};

// Example usage
spawnChildProcess(['someArgument1', 'someArgument2']);
