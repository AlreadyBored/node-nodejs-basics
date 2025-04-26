import { spawn } from "child_process";
import path from "path";

const spawnChildProcess = async (args) => {
  const childProcess = spawn(
    "node",
    [path.resolve("files", "script.js"), ...args],
    {
      stdio: ["pipe", "pipe", "inherit"],
    }
  );

  process.stdin.pipe(childProcess.stdin);
  childProcess.stdout.pipe(process.stdout);
};

spawnChildProcess(["13", "12"]);
