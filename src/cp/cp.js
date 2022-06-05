import { fork } from 'child_process';

export const spawnChildProcess = async (args) => {
  args = process.argv.slice(2);

  fork('src/cp/files/script.js', args);
};

spawnChildProcess();
