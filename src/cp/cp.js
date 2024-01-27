import { spawn } from "child_process";
import { getDirName } from "../utils/utils.js";

const spawnChildProcess = async (args) => {
  const scriptPath = getDirName(import.meta.url) + "/files/script.js";

  const childProcess = spawn("node", [scriptPath, ...args]);

  process.stdin.pipe(childProcess.stdin);

  childProcess.stdout.on("data", (data) => {
    process.stdout.write(data.toString());
  });
};

spawnChildProcess(["arg1", "arg2"]);
