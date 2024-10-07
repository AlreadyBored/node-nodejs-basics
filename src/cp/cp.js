import { fork } from 'child_process';
import process from 'process';
import path from 'path';

const spawnChildProcess = async (args) => {
  const file = path.join(process.cwd(), 'files', 'script.js');

  const controller = new AbortController();
  const { signal } = controller;
  //   Создаем дочерний процесс
  const child = fork(file, args, {
    stdio: ['ipc', 'pipe', 'pipe'],
    signal,
  });

  // Передаем данные из stdin master процесса в stdin дочернего процесса
  process.stdin.on('data', (data) => {
    child.stdin.write(data);
  });

  // Передаем данные из stdout дочернего процесса в stdout master процесса
  child.stdout.on('data', (data) => {
    process.stdout.write(data);
  });

  // Закрытие процесса по команде CLOSE
  child.on('exit', (code) => {
    console.log(`Child process exited with code ${code}`);
    process.exit(code);
  });
};

// Put your arguments in function call to test this functionality
spawnChildProcess(['x', 'y', 'z', 'CLOSE', 'qwerty']);
