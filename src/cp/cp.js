import { fork } from "child_process";
import { fileURLToPath } from "url";
import path from "path";

const modulePath = path.dirname(fileURLToPath(import.meta.url));
const filePath = path.join(modulePath, "files", "script.js");

const spawnChildProcess = async (args) => {
    fork(filePath, args);
};

spawnChildProcess();
