import { spawn } from "child_process";

const spawnChildProcess = (args) => {
  const scriptPath = new URL("./files/script.js", import.meta.url).pathname;
  const child = spawn("node", [scriptPath, ...args]);

  process.stdin.pipe(child.stdin);
  child.stdout.pipe(process.stdout);

  child.on("error", (err) => {
    console.error("Failed to start child process:", err);
  });

  child.on("exit", (code) => {
    console.log(`Child process exited with code ${code}`);
  });
};

spawnChildProcess(["arg1", "arg2"]);
