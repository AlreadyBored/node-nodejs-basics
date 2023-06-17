import { fork } from 'node:child_process';

const modulePath = new URL('./files/script.js', import.meta.url);

const spawnChildProcess = async (args) => {
  const childProcess = fork(modulePath, args);

  childProcess.send(process.stdin);
  childProcess.on('message', (m) => {
    process.stdout.write(m);
  });
};

spawnChildProcess();
