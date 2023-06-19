import { spawn } from "node:child_process";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const spawnChildProcess = async (args) => {
  const folderPath = join(__dirname, "files");
  const childPath = join(folderPath, "script.js");

  spawn("node", [childPath, ...args], {
    stdio: [0, 1, "ipc"],
  });
};

spawnChildProcess(["someArgument1", "someArgument2"]);
