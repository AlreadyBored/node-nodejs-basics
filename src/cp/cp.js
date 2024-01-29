import { spawn } from 'child_process';

const spawnChildProcess = async (args) => {
  return new Promise((resolve, reject) => {
    const childProcess = spawn('node', ['./src/cp/files/script.js', ...args], { stdio: 'pipe' });
    childProcess.stdout.pipe(process.stdout);
    process.stdin.pipe(childProcess.stdin);
    childProcess.on('exit', (code) => {
      code === 0 ? resolve() : reject(new Error(`Child process exited with code ${code}`));
    });
    childProcess.on('error', (err) => {
      reject(err);
    });
  });
};

spawnChildProcess(['someArgument1', 'someArgument2']);
