import { spawn } from "child_process";
import path from "path";
import { stdin, stdout } from "process";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const spawnChildProcess = async (args) => {
  const child = spawn(
    "node",
    [path.join(__dirname, "files", "script.js"), ...args],
    {
      stdio: ["pipe", "pipe", "inherit"],
    },
  );

  stdin.pipe(child.stdin);
  child.stdout.pipe(stdout);

  child.on("close", (code) => {
    console.log(`Child process exited with code ${code}`);
  });
};

spawnChildProcess(["arg1", "arg2"]);
