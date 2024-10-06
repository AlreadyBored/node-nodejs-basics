import { fileURLToPath } from "url";
import path, { dirname } from "path";
import { spawn, fork, exec, execFile } from "child_process";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const scriptPath = path.join(__dirname, "files", "script.js");

const spawnChildProcess = async (args) => {
    const proc = spawn(`node`, [scriptPath, args]);

    process.stdin.pipe(proc.stdin);

    proc.stdout.on("data", (data) => {
        console.log(Buffer.from(data).toString());
    });

    proc.stderr.on('data', (data) => {
        console.log(`stderr: ${data}`)
    })

    proc.on("close", (code) => {
        console.log("Child process exited with code ", code);
    });

    proc.on('error', (err) => {
        console.log(err)
    })
};

// Put your arguments in function call to test this functionality
const arr = new Array(10).fill(1).map((e) => Math.floor(Math.random() * 1000));
spawnChildProcess(arr);
