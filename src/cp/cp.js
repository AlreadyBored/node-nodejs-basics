import { fork } from "child_process";
import path from "path";
import url from "url";

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const parentFilePath = path.resolve(__dirname, "files", "script.js");

const spawnChildProcess = async (args) => {
  const childProcess = fork(parentFilePath, args, {
    stdio: ["pipe", "pipe", "pipe", "ipc"],
  });
  process.stdin.pipe(childProcess.stdin);
  childProcess.stdout.pipe(process.stdout);
};

spawnChildProcess([1, 2, 3, 4, 5]);
