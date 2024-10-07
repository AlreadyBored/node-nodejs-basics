import { fork } from "child_process";

const spawnChildProcess = async (args) => {
  const child = fork("./files/script.js", args, {
    stdio: ["pipe", "pipe", "pipe", "ipc"],
  });

  process.stdin.pipe(child.stdin);
  child.stdout.pipe(process.stdout);
  child.stderr.pipe(process.stderr);

  child.on("close", (code) => {
    console.log(`Child process exited with code ${code}`);
  });
};

// Put your arguments in function call to test this functionality
spawnChildProcess(["Argument One", "Argument two", "Argument three"]);
