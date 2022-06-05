import { fork } from 'node:child_process';

const args = process.argv.slice(2);

export const spawnChildProcess = async (args) => {
  const child = fork('./src/cp/files/script.js', args);
  child.on('error', (err) => {
    console.error(err);
  });
};

spawnChildProcess(args);
