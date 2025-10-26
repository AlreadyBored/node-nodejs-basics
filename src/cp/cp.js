import { fork } from "node:child_process";
import { stdin, stdout } from "node:process";

export const spawnChildProcess = (args) => {
  const child = fork("./files/script.js", args, {
    stdio: ["pipe", "pipe", "pipe", "ipc"],
  });

  stdin.pipe(child.stdin);
  child.stdout.pipe(stdout);
};

spawnChildProcess(["arg1", "arg2"]);
