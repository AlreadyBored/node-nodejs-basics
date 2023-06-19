import { fork } from "child_process";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const __fileName = fileURLToPath(import.meta.url);
const __dirName = dirname(__fileName);
const file = join(__dirName, "files", "script.js");

const spawnChildProcess = async (args) => {
    fork(file, args);
};

// Put your arguments in function call to test this functionality
spawnChildProcess(["NodeJS", "basics"]);
