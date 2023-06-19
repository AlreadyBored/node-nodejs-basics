import { fork } from "node:child_process";
import path from "node:path";
import url from "node:url";

export const __dirname = path.dirname(url.fileURLToPath(import.meta.url));

const spawnChildProcess = async (args) => {
  fork(path.resolve(__dirname, "./files/script.js"), args);
};

// Put your arguments in function call to test this functionality
spawnChildProcess(["foo", "bar", "baz"]);
