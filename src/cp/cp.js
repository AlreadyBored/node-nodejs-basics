import childProcess from "node:child_process";
import path from "node:path";
import url from "node:url";

const spawnChildProcess = async (args) => {
  const __filename = url.fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);

  const filePath = path.join(__dirname, "files", "script.js");

  childProcess.spawn("node", [filePath, ...args], {
    stdio: [0, 1, "ipc"],
  });
};

// Put your arguments in function call to test this functionality
await spawnChildProcess(["someArgument1", "someArgument2", "someArgument3"]);
