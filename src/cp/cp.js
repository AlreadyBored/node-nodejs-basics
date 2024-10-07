import { spawn } from 'child_process';
import path from 'path';
import { createInterface } from 'readline';
import {fileURLToPath} from "url";

const spawnChildProcess = async (args) => {
  const __dirname = path.dirname(fileURLToPath(import.meta.url));
  const scriptPath = path.join(__dirname, 'files', 'script.js');
  const child = spawn('node', [scriptPath, ...args], {
    stdio: ['pipe', 'pipe', 'inherit'],
  });

  const rl = createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  rl.on('line', (input) => {
    child.stdin.write(input + '\n');
  });

  child.stdout.on('data', (data) => {
    process.stdout.write(data);
  });

  child.on('exit', (code) => {
    console.log(`Child process exited with code ${code}`);
    rl.close();
  });

};

// Put your arguments in function call to test this functionality
spawnChildProcess(["arg1","arg2"]);
