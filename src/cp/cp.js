import { spawn } from 'child_process';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const spawnChildProcess = async (args) => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);

  const child = spawn('node', [join(__dirname, 'files', 'script.js'), ...args], {
    stdio: ['pipe', 'pipe', process.stderr]
  });

  process.stdin.pipe(child.stdin);
  child.stdout.pipe(process.stdout);

  child.on('exit', (code) => {
    console.log(`Child process exited with code ${code}`);
  });
};

spawnChildProcess(['arg1', 'arg2', 'arg3']);