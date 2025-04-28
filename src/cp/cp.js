import { spawn } from "node:child_process";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const pathToScript = join(__dirname, "files", "script.js");

const spawnChildProcess = async (args) => {
  const child = spawn("node", [pathToScript, ...args], {
    stdio: ["pipe", "pipe", "pipe", "ipc"],
  });

  process.stdin.pipe(child.stdin);
  child.stdout.pipe(process.stdout);

  return child;
};

// Put your arguments in function call to test this functionality
spawnChildProcess(["arg1", "arg2"]);
