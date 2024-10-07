import { fork } from 'child_process';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const spawnChildProcess = async (args) => {
    const forkProcessPath = join(__dirname, "files", "script.js");
    const forkedProcess = fork(forkProcessPath, args);
};

// Put your arguments in function call to test this functionality
spawnChildProcess(["smth1", "smth2"]);
