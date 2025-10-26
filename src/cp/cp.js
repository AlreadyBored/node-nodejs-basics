import { spawn } from "node:child_process";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const spawnChildProcess = async (args) => {
  const child = spawn(
    "node",
    [path.join(__dirname, "files/script.js"), ...args],
    {
      stdio: ["pipe", "pipe", "inherit"],
    }
  );

  process.stdin.pipe(child.stdin);
  child.stdout.pipe(process.stdout);
};

// Put your arguments in function call to test this functionality
await spawnChildProcess(["arg1", "arg2"]);
