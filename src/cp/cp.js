import { spawn } from "child_process";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = fileURLToPath(new URL(".", import.meta.url));

const spawnChildProcess = async (args) => {
  const childPath = path.resolve(__dirname, "./files", "script.js");
  const child = spawn("node", [childPath, ...args]);

  child.stdout.on("data", (data) => {
    console.log(data.toString());
  });

  child.stdin.write("Child Process started");
};

spawnChildProcess(process.argv.slice(2));
