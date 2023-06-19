import { fork } from "child_process";

const SCRIPT_PATH = "./files/script.js";
const scriptUrl = new URL(SCRIPT_PATH, import.meta.url);

const spawnChildProcess = async (args) => {
  const childProcess = fork(scriptUrl, args, { silent: true });

  process.stdin.pipe(childProcess.stdin);
  childProcess.stdout.pipe(process.stdout);
};

spawnChildProcess();
