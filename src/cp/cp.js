import path from "path";
import { stdin } from "process";
import { spawn } from "child_process";
import { getDirName } from "../utils.js";

const __dirname = getDirName(import.meta.url);
const filePath = path.join(__dirname, "files", "script.js");

const spawnChildProcess = async (args) => {
  const childProcess = spawn("node", [filePath, ...args]);

  childProcess.stdout.pipe(process.stdout);
  stdin.pipe(childProcess.stdin);
};

// Put your arguments in function call to test this functionality
spawnChildProcess(process.argv.slice(2));
