import { spawn } from "child_process";
import process from "process";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const spawnChildProcess = async (args) => {
  // Write your code here
  const scriptPath = join(
    dirname(fileURLToPath(import.meta.url)),
    "files",
    "script.js"
  );

  const childProcess = spawn("node", [scriptPath, ...args], {
    stdio: ["pipe", "pipe", "inherit"],
  });
  process.stdin.pipe(childProcess.stdin);

  childProcess.on("exit", (code, signal) => {
    console.log(`Child process exited with code ${code} and signal ${signal}`);
  });
};

// Put your arguments in function call to test this functionality
spawnChildProcess(["arg1", "arg2", "arg3"]);
