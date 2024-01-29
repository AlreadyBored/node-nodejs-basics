import {spawn} from 'child_process';

const spawnChildProcess = async (args) => {
    // Write your code here
    const child = spawn('node', ["./src/cp/files/script.js", ...args], {
        stdio: ["pipe", "pipe", "pipe", "ipc"]
    });

    child.stdin.setDefaultEncoding("utf-8");
    child.stdout.pipe(process.stdout);
    
    child.stdin.on("data", (data) => {
        child.stdin.write(`stdin: ${data}`);
    })
    
    child.stdin.end();
    
    child.stdout.on("data", (data) => {
        console.log(`stdout: ${data}`);
    });

    child.stderr.on("data", (data) => {
        console.error(`stderr: ${data}`);
    });

    child.on("exit", (code) => {
        console.log(`Child process exited with code ${code}`);
    });


    return child
}

// Put your arguments in function call to test this functionality
spawnChildProcess(["arg1", "arg2", "arg3", "arg4"]);
