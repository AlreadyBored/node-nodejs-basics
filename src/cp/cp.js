import path from 'path';
import { spawn } from 'child_process';

const spawnChildProcess = async (args) => {
  const currentFilePath = new URL(import.meta.url).pathname;
  const dirname = path.dirname(currentFilePath);
  const scriptPath = path.join(dirname, 'files', 'script.js');
  const child = spawn('node', [scriptPath, ...args]);

  process.stdin.pipe(child.stdin);
  child.stdout.pipe(process.stdout);

  child.on('error', (err) => console.error('Child process error:', err));

  child.on('exit', (code) =>
    console.log('Child process exited with code:', code)
  );

  await new Promise((resolve) => child.on('close', () => resolve()));
};

spawnChildProcess(['someArgument1', 'someArgument2']);
