import { spawn } from "child_process";

const spawnChildProcess = async (args) => {
  const child = spawn("node", ["./src/cp/files/script.js"].concat(args), {
    stdio: ["pipe", "pipe", "inherit", "ipc"],
  });

  process.stdin.pipe(child.stdin);

  child.stdout.on("data", (data) => {
    process.stdout.write(data);x
  });

  child.on("error", (error) => {
    console.error(`ERROR: ${error.message}`);
  });
};

spawnChildProcess(["test1", "test2"]);
