import child_process from "child_process";
import process from "node:process";
import path from "path";
import { fileURLToPath } from "url";

const spawnChildProcess = async (args) => {
  console.log("spawnChildProcess args", args);
  //Cntrl + C = exit
  process.on("SIGINT", () => {
    process.exit();
  });

  // Script file.
  const __filename = fileURLToPath(import.meta.url);
  // Folder of script file.
  const __dirname = path.dirname(__filename);

  // Gets the absolute path to the script.js file
  const scriptPath = path.join(__dirname, "files", "script.js");

  // Spawns a child process using the script.js file
  // Read more https://nodejs.org/api/child_process.html#optionsstdio
  // .spawn variant
  // const child = child_process.fork("node", [scriptPath, ...args]);
  // .fork variant
  const child = child_process.fork(scriptPath, args);

  // Handle events when the child process exits
  child.on("exit", (code, signal) => {
    process.exit(code);
  });
};

// Put your arguments in function call to test this functionality
spawnChildProcess(["someArgument1", "someArgument2", "someArgument3"]);
