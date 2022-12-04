import { fork } from "child_process";
import path from "path";
import * as url from "url";

const __dirname = url.fileURLToPath(new URL(".", import.meta.url));
const pathToScript = path.join(__dirname, "files", "script.js");

const spawnChildProcess = async (args) => {
  fork(pathToScript, args);
};

spawnChildProcess(["arg1", "arg2"]);
