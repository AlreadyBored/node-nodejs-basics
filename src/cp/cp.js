import { spawn } from "child_process";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const spawnChildProcess = async (args) => {
  const scriptPath = path.join(__dirname, "files/script.js");
  const child = spawn("node", [scriptPath, ...args]);

  process.stdin.pipe(child.stdin);
  child.stdout.pipe(process.stdout);

  return new Promise((resolve) => {
    child.on("exit", (code) => {
      resolve();
    });
  });
};

await spawnChildProcess(["someArgument1", "someArgument2"]);
