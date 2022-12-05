import { fork } from "node:child_process";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const src = path.join(__dirname, "files", "script.js");

const spawnChildProcess = async (args) => {
  fork(src, args);
};

// Put your arguments in function call to test this functionality
spawnChildProcess([123, 321, "abc", "cba"]);
