import { fileURLToPath } from "url";
import { dirname } from "path";
import { spawn } from "child_process";

const spawnChildProcess = async (args) => {
    // Write your code here
    const childProcess = spawn(`node`, ['--version'])
    childProcess.stdout.on('data', (args) => {
        console.log(args.toString());
    })
};

// Put your arguments in function call to test this functionality
spawnChildProcess();
