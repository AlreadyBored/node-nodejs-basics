import { spawn } from "node:child_process";
import * as path from "node:path";

const spawnChildProcess = async (args) => {
  const __dirname = import.meta.dirname;
  const child = spawn("node", [
    path.join(__dirname, "files", "script.js"),
    ...args,
  ]);
  process.stdin.pipe(child.stdin);
  child.stdout.pipe(process.stdout);
  child.stderr.on("data", (data) => {
    console.error(`Error from child process: ${data}`);
  });
  child.on("close", (code) => {
    console.log(`Child process exited with code ${code}`);
    process.exit(code);
  });
};
spawnChildProcess(["arg0", "arg1", "arg2", "arg3"]);
