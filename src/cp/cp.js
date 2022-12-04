import { fork } from "node:child_process";
import path from "node:path";

const spawnChildProcess = async (args) => {
  // Write your code here

  const src = path.resolve(process.cwd(), "src", "cp", "files", "script.js");

  fork(src, process.argv);
};

spawnChildProcess();
