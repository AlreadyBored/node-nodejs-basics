import { spawn } from 'child_process';
import {fileURLToPath} from "url";
import path from "node:path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const spawnChildProcess = async (args) => {
    const childProcess = spawn('node',[path.join(__dirname,'files','script.js'),...args],{
        stdio: ["pipe",'pipe', 'inherit',"ipc"]
    })

    const exitPromise = new Promise((resolve) => childProcess.on('exit', resolve));

    process.stdin.pipe(childProcess.stdin)
    childProcess.stdout.pipe(process.stdout)

    await exitPromise

    process.stdin.unpipe(childProcess.stdin)
    childProcess.stdout.unpipe(process.stdout)
    console.log(childProcess.exitCode)
};

// Put your arguments in function call to test this functionality
spawnChildProcess(['someArgument1', 'someArgument2', 'someArgument3']);
