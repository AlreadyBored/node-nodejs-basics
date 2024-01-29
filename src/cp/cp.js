import { spawn } from 'child_process';
import { fileURLToPath } from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const DIR = "files";
const FILE_NAME = "script.js";

const spawnChildProcess = async (args) => {
  const scriptPath = path.join(__dirname, DIR, FILE_NAME);
  const child = spawn("node", [scriptPath, ...args], {
    stdio: ["pipe", "pipe", "inherit", "ipc"],
  });

  process.stdin.pipe(child.stdin);

  child.stdout.pipe(process.stdout);

  child.on("error", (error) => {
    console.error(`Error in child process: ${error.message}`);
  });

  child.on("exit", (code) => {
    console.log(`Child process exited with code ${code}`);
  });
};

spawnChildProcess([1, 2, 3, 4, 5]);
