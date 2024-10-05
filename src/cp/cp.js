import { spawn } from "child_process";
import { fileURLToPath } from "node:url";
import { dirname } from "node:path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const spawnChildProcess = async (args) => {
  const pathToScript = `${__dirname}/files/script.js`;
  const child = spawn("node", [pathToScript, ...args], {
    stdio: ["pipe", "pipe", "inherit"],
  });

  process.stdin.pipe(child.stdin);

  child.stdout.pipe(process.stdout);

  child.on("error", (err) => {
    console.error("Failed", err);
  });
  // Write your code here

  // 1 spawnChildProcess function recives array of arguments that means args=[.....]
  // 2 Creating child process in script.js passing these args.Waht is child process ? How can I create it ?
  // 3 What function it points to ?.This function should create IPC-chaneel between stdin and stdout
};

// Put your arguments in function call to test this functionality
spawnChildProcess(["Hello", "Node"]);
