import { spawn } from 'node:child_process';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const spawnChildProcess = async (args = []) => {
  // Resolve path to the script we want to run
  const scriptPath = path.join(__dirname, 'files', 'script.js');

  // Ensure args is an array
  const normalizedArgs = Array.isArray(args) ? args.map(String) : [];

  // Spawn a new Node.js process executing the script with provided arguments
  const child = spawn(process.execPath, [scriptPath, ...normalizedArgs], {
    stdio: ['pipe', 'pipe', 'inherit'], // pipe stdin & stdout, inherit stderr
  });

  // Pipe master stdin to child stdin, and child stdout back to master stdout
  process.stdin.pipe(child.stdin);
  child.stdout.pipe(process.stdout);

  // Optional: handle errors for visibility
  child.on('error', (err) => {
    console.error('Child process error:', err);
  });

  // Return a promise that resolves on child exit (so caller can await if desired)
  return new Promise((resolve) => {
    child.on('exit', (code, signal) => {
      resolve({ code, signal });
    });
  });
};

// Put your arguments in function call to test this functionality
await spawnChildProcess(['value1', '1337', '42']);
