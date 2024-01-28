import { fileURLToPath } from "url";
import { dirname, resolve } from "path";
import { spawn } from "child_process";

const spawnChildProcess = async (args) => {
    // Write your code here

    const scriptJs = resolve(dirname(fileURLToPath(import.meta.url)), "files", "script.js");

    const childProcess = spawn(`node`, [scriptJs, ...args])
    childProcess.stdout.on('data', (args) => {
        console.log(args.toString());
    })
};

// Put your arguments in function call to test this functionality
spawnChildProcess(['--version']);
