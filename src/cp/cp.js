import { spawn } from "child_process";
import path, { dirname } from "path";
import { fileURLToPath } from "url";

const spawnChildProcess = async (args) => {
  const basePath = dirname(fileURLToPath(import.meta.url));
  const scriptPath = path.join(basePath, "files/script.js");

  const child = spawn("node", [scriptPath, ...args], {
    stdio: ["inherit", "inherit", "inherit", "ipc"],
  });

  process.stdin.on("data", (data) => {
    child.stdin.write(data);
  });
};

// Put your arguments in function call to test this functionality
spawnChildProcess(["Argument1", "Argument2"]);
