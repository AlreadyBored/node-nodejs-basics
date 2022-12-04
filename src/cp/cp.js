import url from "url";
import path from "path";
import child_process from "child_process";

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const pathToFile = path.join(__dirname, "files", "script.js");

const spawnChildProcess = async (args) => {
  const child = await child_process.fork(pathToFile, args);

  child.on("exit", () => console.log("Child process terminated"));
};

await spawnChildProcess([123, true, "false"]);