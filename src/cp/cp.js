import { spawn } from 'child_process';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const scriptFilePath = join(__dirname, 'files', 'script.js');

const spawnChildProcess = async (args) => {
  const child = spawn('node', [scriptFilePath, ...args], { stdio: 'inherit' });

  child.on('exit', (code) => {
    console.log(`Child process exited with code ${code}`);
  });
};

// Put your arguments in function call to test this functionality
const args = ['argument1', 'argument2', 'argument3'];
spawnChildProcess(args);
