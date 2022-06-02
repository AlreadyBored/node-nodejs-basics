import { spawn } from "child_process";

export const spawnChildProcess = async (args) => {
  // Write your code here
  const script = "files/script.js";
  const child = spawn("node", [script, args]);
  child.stdin.setEncoding("utf-8");
  child.stdout.pipe(process.stdout);
  child.stdin.write("example data to child process");
  child.stdin.end();
};
