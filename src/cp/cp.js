import { spawn } from "child_process";
import readline from "readline";

const spawnChildProcess = async (args) => {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  const child = spawn("node", ["./files/script.js", ...args]);

  process.stdin.pipe(child.stdin);

  child.stdout.pipe(process.stdout);

  child.stderr.on("data", (data) => {
    console.error(`stderr: ${data}`);
  });

  child.on("close", (code) => {
    console.log(`Child process exited with code ${code}`);
    rl.close();
  });
};

// Put your arguments in function call to test this functionality
spawnChildProcess(/* [someArgument1, someArgument2, ...] */);
