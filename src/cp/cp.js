import { spawn } from "node:child_process";
import { join } from "node:path";

const spawnChildProcess = async (args) => {
  const scriptPath = join(process.cwd(), "src", "cp", "files", "script.js");

  const child = spawn("node", [scriptPath, ...args], {
    stdio: ["inherit", "inherit", "inherit", "ipc"],
  });

  // Forward stdin to child process
  process.stdin.pipe(child.stdin);

  // Forward child stdout to parent stdout
  child.stdout.pipe(process.stdout);

  // Handle child process events
  child.on("error", (error) => {
    console.error("Child process error:", error);
  });

  child.on("exit", (code) => {
    process.exit(code);
  });
};

spawnChildProcess(["someArgument1", "someArgument2"]);
