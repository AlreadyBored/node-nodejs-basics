import { spawn } from "node:child_process";
import { makePath } from "../utils/makePath.js";

const path = makePath(import.meta.url, "/files/script.js");

const spawnChildProcess = async (args) => {
  const childProcess = spawn("node", [path, ...args.split(" ")]);

  process.stdin.on("data", (message) => {
    childProcess.stdin.write(message);
  });

  childProcess.stdout.on("data", (message) => {
    console.log(message.toString());
  });
};

spawnChildProcess("--foo --bar");
