import fs from "fs";
import path from "path";

import cp from "child_process";

const currentFolder = process.cwd();
const targetFolder = "files";
const targetFile = "script.js";

const targetFil2e = "files/script.js";

const pathToTargetFIleWorker = path.join(
  currentFolder,
  targetFolder,
  targetFile
);

const spawnChildProcess = async (args) => {
  // Write your code here
  const childProcess = cp.spawn("node", ["files/script.js", ...args], {
    stdio: ["pipe", "pipe", "pipe", "ipc"],
  });
  process.stdin.on("data", (data) => {
    childProcess.stdin.write(data);
  });
  childProcess.stdout.on("data", (data) => {
    process.stdout.write(data);
  });
  process.stdin.on("end", () => {
    childProcess.stdin.end();
  });
  childProcess.on("exit", (code, signal) => {
    console.log(`Child process exited with code ${code} and signal ${signal}`);
    process.exit(code);
  });
};

//Put your arguments in function call to test this functionality
spawnChildProcess([someArgument1, someArgument2]);
