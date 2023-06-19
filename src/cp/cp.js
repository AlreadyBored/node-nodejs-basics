import { spawn } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import { dirname } from 'node:path';

const spawnChildProcess = async (args) => {
    // Write your code here
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = dirname(__filename);
    const runScript = spawn(`node`, [`${__dirname}/files/script.js`, ...args]);

  return await new Promise((res, rej) => {
      runScript.stdin.write('Child process result.');

      runScript.stdout.on('data', (data) => {
        console.log(data.toString());

        runScript.stdin.end();
        res(data);
      });

      runScript.on('error', (err) => {
        console.error('Failed to start subprocess.');
        rej('err');
      });
    });
};

// Put your arguments in function call to test this functionality
spawnChildProcess( ['someArgument1', 'someArgument2']);
