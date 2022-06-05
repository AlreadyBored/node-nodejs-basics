import { spawn } from 'child_process';

export const spawnChildProcess = async (args) => {
    const child = spawn(
      'node',
      ['./src/cp/files/script.js', ...args],
      {stdio: [process.stdin, 'pipe']}
    )

    child.stdout.on('data', data => {
        console.log(`Data from child process:\n${data}`);
    });
        
    child.on('close', (code) => {
      console.log(`Child process exited with code ${code}`);
    });
};

spawnChildProcess(process.argv.slice(2))