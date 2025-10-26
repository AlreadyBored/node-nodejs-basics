import { spawn } from 'node:child_process';
import { fileURLToPath } from 'node:url';

export const spawnChildProcess = async (args = []) => {
  const scriptPath = fileURLToPath(new URL('./files/script.js', import.meta.url));

  const child = spawn(process.execPath, [scriptPath, ...args], {
    stdio: ['pipe', 'pipe', 'inherit'], 
  });

  process.stdin.pipe(child.stdin);
  child.stdout.pipe(process.stdout);

  return new Promise((resolve, reject) => {
    child.once('error', reject);
    child.once('exit', (code) => {
      process.stdin.unpipe(child.stdin);
      child.stdout.unpipe(process.stdout);
      if (code === 0) resolve();
      else reject(new Error(`Child exited with code ${code}`));
    });
  });
};

// Put your arguments in function call to test this functionality
spawnChildProcess(  ["rs", "2025", "node.js"] );
