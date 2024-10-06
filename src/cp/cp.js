import { spawn, fork } from 'child_process';
import { getPath } from '../fs/fs-constants.js';

const filePath = getPath(import.meta.url, 'script.js');

const spawnChildProcess = async (args) => {
  // const child = spawn('node', [filePath, ...args], {
  //   stdio: ['pipe', 'pipe', 'inherit']  // Use pipes for stdin and stdout
  // });
  //   const child = fork(filePath, args, {
  //     stdio: ['pipe', 'pipe', 'inherit', 'ipc']
  //   });

  const child = fork(filePath, args, { silent: true });

  // const child = spawn('node', ['--version'], {
  //   stdio: ['pipe', 'pipe', 'inherit']  // Use pipes for stdin and stdout
  // });

  // const child = spawn('node', [filePath, ...args]);

  // process.stdin.on('data', (data) => {
  //   child.stdin.write(data);
  // });
  //
  // child.stdout.on('data', (data) => {
  //   process.stdout.write(data);
  // });

  process.stdin.pipe(child.stdin);

  child.stdout.pipe(process.stdout);

  child.on('exit', (code) => {
    console.log(`Child process exited with code ${code}`);
  });
};

await spawnChildProcess( ['arg1', 'arg2', 'arg3']);
