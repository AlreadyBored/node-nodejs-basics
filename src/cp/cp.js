import { spawn } from "child_process";

const spawnChildProcess = async () => {
  const args = process.argv.slice(2);

  const child = spawn("node", ["./src/cp/files/script.js", ...args], { stdio: ["pipe", "pipe", "inherit"] });

  process.stdin.pipe(child.stdin);
  child.stdout.pipe(process.stdout);
};

spawnChildProcess();
