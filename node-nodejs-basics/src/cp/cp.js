import { spawn } from "child_process";

const spawnChildProcess = async (args) => {
  const child = spawn("node", ["src/cp/files/script.js", ...args], {
    stdio: ["pipe", "pipe", "inherit"],
  });

  process.stdin.on("data", (data) => {
    child.stdin.write(data);
  });

  child.stdout.on("data", (data) => {
    process.stdout.write(data);
  });

  child.on("close", (code) => {
    console.log(`Child process exited with code ${code}`);
    process.exit(1);
  });
};

// Put your arguments in function call to test this functionality
spawnChildProcess(["arg1", "arg2", "arg3"]);
