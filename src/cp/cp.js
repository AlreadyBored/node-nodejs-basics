import { spawn } from 'node:child_process';

const inputArgs = process.argv.slice(2);

const spawnChildProcess = async (args) => {
  const child = spawn('node', ['./files/script.js', ...args]);

  child.stdout.on('data', (data) => {
    console.log(data.toString());
  });

  child.stdin.write('Hello! 🔥');
};

await spawnChildProcess(inputArgs);
