import child_process from "node:child_process";
import path from "node:path";

const spawnChildProcess = async (args) => {
  const scriptPath = path.join("src", "cp", "files", "script.js");
  const child = child_process.spawn("node", [scriptPath, ...args]);
  process.stdin.pipe(child.stdin);
  child.stdout.pipe(process.stdout);
};

spawnChildProcess(["--some-arg", "value1", "--other", 1337, "--arg2", 42]);
