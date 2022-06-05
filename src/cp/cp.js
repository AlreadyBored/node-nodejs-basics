import { spawn } from 'child_process';
import path from 'path'
import { childProcessPath } from '../common/constants.js';

export const spawnChildProcess = async (args) => {
    const child = spawn(
      'node',
      [path.join(childProcessPath, 'script.js'), ...args],
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