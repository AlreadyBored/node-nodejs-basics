import path from "node:path";
import { fork } from "node:child_process";

const spawnChildProcess = async (args) => {
  const scriptPath = path.join(import.meta.dirname, "files", "script.js");
  const childProcess = fork(scriptPath, args, { silent: true });

  process.stdin.pipe(childProcess.stdin);
  childProcess.stdout.pipe(process.stdout);
};

// Put your arguments in function call to test this functionality
spawnChildProcess();

