import { spawn } from "child_process";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const spawnChildProcess = async (args) => {
  const scriptPath = path.join(__dirname, "files", "script.js");

  console.log(`Spawning child process: node ${scriptPath} ${args.join(" ")}`);

  const child = spawn("node", [scriptPath, ...args], {
    stdio: ["pipe", "pipe", "pipe"],
  });

  process.stdin.pipe(child.stdin);

  child.stdout.pipe(process.stdout);

  child.stderr.pipe(process.stderr);

  child.on("error", (error) => {
    console.error(`Child process error: ${error.message}`);
  });

  child.on("exit", (code, signal) => {
    if (code !== null) {
      console.log(`Child process exited with code ${code}`);
    } else if (signal !== null) {
      console.log(`Child process was killed with signal ${signal}`);
    }
  });

  return child;
};

spawnChildProcess(["hello", "world"]);
