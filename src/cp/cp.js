import { fork } from "child_process";
import { fileURLToPath } from "url";
import { dirname, resolve } from "path";

const fileName = fileURLToPath(import.meta.url);
const dirName = dirname(fileName);

const spawnChildProcess = async (args) => {
  const childProcess = fork(resolve(dirName, "files", "script.js"), args, {silent: true});

  childProcess.stdout.pipe(process.stdout);

  childProcess.stdout.on('data', chunk => {
    process.stdout.write(`Received from child process: ${chunk}`)
 });

};

spawnChildProcess();