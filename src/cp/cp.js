import { fork } from "child_process";

const spawnChildProcess = async (args) => {
  const path = "./files/script.js";
  const url = new URL(path, import.meta.url);

  const childProcess = fork(url, args, { silent: true });
  process.stdin.pipe(childProcess.stdin);
  childProcess.stdout.pipe(process.stdout);
};

spawnChildProcess();