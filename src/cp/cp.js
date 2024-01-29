import { spawn } from 'child_process';

const spawnChildProcess = async (args) => {
  try {
    if (!isValidPath('./files/script.js')) {
      throw new Error('Invalid child path: ./files/script.js');
    }

    const child = spawn('node', ['./files/script.js', ...args], {
      stdio: ['pipe', 'pipe', 'inherit'],
    });

    child.stdout.pipe(process.stdout);
    process.stdin.pipe(child.stdin);

    await new Promise((resolve, reject) => {
      child.on('exit', (code) => {
        if (code === 0) {
          resolve();
        } else {
          reject(new Error(`Child process exited with code ${code}`));
        }
      });

      child.on('error', (error) => {
        reject(error);
      });
    });

    console.log('Child Success!');
  } catch (error) {
    console.error('Error spawning child process:', error);
    process.exit(1);
  }
};

function isValidPath(path) {
  return true;
}

spawnChildProcess(['arg1', 'arg2']);
