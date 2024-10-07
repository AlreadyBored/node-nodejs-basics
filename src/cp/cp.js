import { spawn } from "child_process";

const spawnChildProcess = async (args) => {
  const child = spawn("node", ["src/cp/files/script.js", ...args]);

  process.stdin.pipe(child.stdin);

  child.stdout.pipe(process.stdout);
};

const args = ["arg1", "arg2", "arg3"];
spawnChildProcess(args);
