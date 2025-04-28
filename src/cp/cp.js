import { spawn } from "node:child_process";
import { fileURLToPath } from "node:url";
import path from "node:path";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const scriptPath = path.join(__dirname, "./files/script.js");
const spawnChildProcess = async (args) => {
  const child = spawn("node", [scriptPath, ...args], {
    stdio: ["pipe", "pipe", "inherit"],
  });

  process.stdin.pipe(child.stdin);
  child.stdout.pipe(process.stdout);

  child.on("exit", (code) => {
    console.log(`process exited with code ${code}`);
  });

  child.on("error", (err) => {
    console.error("error:", err);
  });
};

await spawnChildProcess(["arg1", "arg2"]);
