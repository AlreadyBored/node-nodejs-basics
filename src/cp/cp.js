import { spawn } from "child_process";
import path from "path";

const scriptPath = path.resolve("src/cp/files/script.js");

const spawnChildProcess = async (args) => {
    const child = spawn("node", [scriptPath, ...args]);

    child.stdout.on("data", (data) => {
        process.stdout.write(data);
    });

    child.stderr.on("data", (data) => {
        process.stderr.write(data);
    });

    process.stdin.pipe(child.stdin);
};

// Put your arguments in function call to test this functionality
spawnChildProcess(["someArgument1", "someArgument2"]);
