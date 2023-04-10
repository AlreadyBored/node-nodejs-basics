import { spawn } from "child_process";

const spawnChildProcess = async (args) => {
    const child = spawn("node", ["./src/cp/files/script.js", ...args]);
    process.stdin.pipe(child.stdin);
    child.stdout.pipe(process.stdout);
    child.on("exit", function (code) {
        console.log("Child process exited with code " + code);
    });
};

spawnChildProcess(["someArgument1", "someArgument2"]);
