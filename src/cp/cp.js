import { fork } from 'child_process';
import path from "path";

export const spawnChildProcess = async (args) => {
    const filePath = path.resolve(process.argv[1], '../files/script.js');

    const child = fork(filePath, args, {
        // uid: process.geteuid(),
        // gid: process.getgid(),
        // cwd: path.resolve(process.argv[1], '../files'),
        stdio: [ process.stdin, process.stdout, process.stderr, 'ipc'],
    });

    child.on("close", function (code) {
        console.log("child process exited with code " + code);
    });

};


spawnChildProcess(process.argv);
