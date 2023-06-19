import { fork } from "child_process";

const url = import.meta.url;
const path = new URL("./files/script.js", url);

const spawnChildProcess = async (args) => {
  const child = fork(path, args, { silent: true });

  process.stdin.pipe(child.stdin);
  child.stdout.pipe(process.stdout);
};

spawnChildProcess();
