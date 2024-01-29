import { fork } from 'child_process';
import path from "path";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const spawnChildProcess = async (args) => {
    const scriptPath = path.join(__dirname, "files", "script.js");
    const childProcess = fork(scriptPath, args, { stdio: "pipe" });

    process.stdin.pipe(childProcess.stdin);
    childProcess.stdout.pipe(process.stdout);

};

spawnChildProcess(["--first_argument", "--second_argument"]);
