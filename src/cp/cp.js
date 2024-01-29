import { spawn } from "child_process";
import { dirname, resolve } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const scriptPath = resolve(__dirname, "./files/script.js");

const spawnChildProcess = async (args) => {
  const child = spawn("node", [scriptPath, ...args], {
    stdio: ["inherit", "inherit", "inherit", "ipc"],
  });

  child.on("error", (error) => {
    console.error(`Child process encountered an error: ${error.message}`);
  });

  child.on("exit", (code, signal) => {
    if (code) {
      console.log(`Child process exited with code ${code}`);
    } else if (signal) {
      console.log(`Child process was killed with signal ${signal}`);
    } else {
      console.log("Child process exited successfully");
    }
  });
};

spawnChildProcess(["arg1", "arg2"]);
