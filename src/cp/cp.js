import { spawn } from 'node:child_process';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const spawnChildProcess = async args => {
  const childProcess = spawn(
    'node',
    [__dirname + '/files/script.js', ...args],
    {
      stdio: ['pipe', 'pipe', 'inherit', 'ipc'],
    }
  );

  process.stdin.pipe(childProcess.stdin);

  childProcess.stdout.on('data', data => {
    process.stdout.write(data.toString());
  });

  childProcess.on('exit', (code, signal) => {
    console.log(`Child process exited with code ${code} and signal ${signal}`);
    process.exit();
  });
};

spawnChildProcess(['someArgument1', 'someArgument2', 4, 5, 6]);
