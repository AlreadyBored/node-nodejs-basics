import { fork } from "node:child_process";
import { join } from "node:path";
import { fileURLToPath } from "node:url";
const __dirname = fileURLToPath(new URL(".", import.meta.url));

const spawnChildProcess = async (args) => {
  fork(join(__dirname, 'files/script.js'), args)
};

spawnChildProcess();
