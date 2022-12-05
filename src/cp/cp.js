import child_process from "child_process";
import path from "path";
import * as url from "url";
const __dirname = url.fileURLToPath(new URL('.', import.meta.url));


const spawnChildProcess = async (args) => {
    let childPath = path.resolve(__dirname, "./files", "script.js");
    child_process.fork(childPath, args);
};

spawnChildProcess();