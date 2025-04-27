import { spawn } from 'child_process';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const spawnChildProcess = async (args) => {
  const scriptPath = path.join(__dirname, 'files', 'script.js');
  
  const child = spawn('node', [scriptPath, ...args], {
    stdio: ['pipe', 'pipe', 'pipe']
  });

  process.stdin.pipe(child.stdin);
  
  child.stdout.pipe(process.stdout);

  child.on('error', (error) => {
    console.error(`Error starting child process: ${error.message}`);
  });

  return new Promise((resolve) => {
    child.on('exit', (code) => {
      resolve(code);
    });
  });
};

spawnChildProcess(['arg1', 'arg2']);
