import { fork } from "child_process";
import { fileURLToPath } from "url";
import path from "path";
import { stderr, stdin, stdout } from "process";
const __dirname = path.dirname(fileURLToPath(import.meta.url));

export const spawnChildProcess = async (args) => {
  try {
    stdout.write(`\t\t\t-----CREATING THE SUBPROCESS-----\n`);
    const child = fork(path.join(__dirname, "files/script.js"), [...args]);
    child.on("error", error => stderr.write("ERROR>>>", error.message));
    child.send("IPC checking...");
    stdout.write(`To check STDIN and STDOUT enter something in the console and press ENTER.\n`);
    stdout.write(`To exit enter CLOSE in the console and press ENTER.\n`);
  }
  catch(err) {
    stderr.write(`ERROR>>> ${err.message}`);
  };
};

spawnChildProcess([]);