import { spawn } from "node:child_process";

const FILE_PATH = "./src/cp/files/script.js";
const CHILD_PROCESS_CONFIG = ["inherit", "pipe", "inherit", "ipc"];

const spawnChildProcess = async (args) => {
  const child = spawn("node", [FILE_PATH, ...args], {
    stdio: CHILD_PROCESS_CONFIG,
  });

  child.stdout.pipe(process.stdout);
};

// Put your arguments in function call to test this functionality
spawnChildProcess([3123, 1312]);
