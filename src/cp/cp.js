import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import { spawn } from 'child_process';

const spawnChildProcess = async (args) => {
  const __dirname = dirname(fileURLToPath(import.meta.url));
  const script = join(__dirname, 'files', 'script.js');

  const child = spawn('node', [script, ...args], { stdio: ['pipe', 'pipe', 'pipe', 'ipc'] });

  process.stdin.pipe(child.stdin);
  child.stdout.pipe(process.stdout);
};

// Put your arguments in function call to test this functionality
spawnChildProcess(["someArgument1", "someArgument1231232"]);