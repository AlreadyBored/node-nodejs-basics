import { spawn } from "node:child_process";
import { URL, fileURLToPath } from "node:url";
const spawnChildProcess = async (args) => {
  // Write your code here
  const scriptURL = new URL("./files/script.js", import.meta.url);
  const scriptPath = fileURLToPath(scriptURL);
  const child = spawn("node", [scriptPath, ...args], {
    stdio: ["pipe", "pipe", "inherit"],
  });

  process.stdin.pipe(child.stdin);

  child.stdout.pipe(process.stdout);
};

// Put your arguments in function call to test this functionality
spawnChildProcess(["someArgument1", "someArgument2", "other argument"]);
