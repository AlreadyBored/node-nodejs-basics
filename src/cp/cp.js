import { spawn } from "child_process";

const spawnChildProcess = async (args) => {
  // Write your code here
  const childProcess = spawn("node", ["script.js", ...args]);

  childProcess.stdout.on("data", (data) => {
    process.stdout.write(data);
  });

  childProcess.on("exit", (code) => {
    console.log(`Child process exited with code: ${code}`);
  });

  childProcess.on("error", (err) => {
    console.error(`Failed to spawn child process: ${err.message}`);
  });

  process.stdin.on("data", (data) => {
    childProcess.stdin.write(data);
  });

  process.stdin.on("end", () => {
    childProcess.stdin.end();
  });
};

// Put your arguments in function call to test this functionality
spawnChildProcess(/* [someArgument1, someArgument2, ...] */);
