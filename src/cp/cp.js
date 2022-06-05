import process from "process";
import path from "path";
import { fork } from "child_process";
export const spawnChildProcess = async (args) => {
  try {
    const __dirname = path.resolve();
    const filePath = path.join(__dirname, "/files", "script.js");
    let x = args.slice(2);
    fork(filePath, x);
  } catch (error) {
    throw error;
  }
};
spawnChildProcess(process.argv);
