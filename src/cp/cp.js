import { spawn } from 'child_process';
import { resolve } from 'path';

const spawnChildProcess = (args) => {
  const scriptPath = resolve(__dirname, 'script.js');
  
  const child = spawn('node', [scriptPath, ...args]);

  process.stdin.pipe(child.stdin); 
  child.stdout.pipe(process.stdout); 

  child.stderr.on('data', (data) => {
    console.error(`Error from child process: ${data}`);
  });

  child.on('close', (code) => {
    console.log(`Child process exited with code ${code}`);
  });
};

export { spawnChildProcess };
