import child_process from 'child_process';
import * as url from 'url';
import path from "path";

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));
const modulePath = path.join(__dirname, "files", "script.js");

const spawnChildProcess = async (args) => {
    child_process.fork(modulePath, args);
};

// Put your arguments in function call to test this functionality
spawnChildProcess(["Hello", 10, 100, "Node.js", "!"]);
