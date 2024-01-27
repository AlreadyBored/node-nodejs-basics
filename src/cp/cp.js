import { spawn } from "node:child_process";

const spawnChildProcess = async (args) => {
  spawn("node", ["script.js", ...args], {
    cwd: "files",
    stdio: ["inherit", "inherit", "inherit", "ipc"],
  });
};

// Put your arguments in function call to test this functionality
spawnChildProcess(["scris", "dsds", "dsd"]);

// You should implement several functions in dedicated files

// cp.js - implement function spawnChildProcess that receives array
//of arguments args and creates child process from file script.js,
//passing these args to it. This function should create IPC-channel
// between stdin and stdout of master process and child process:
// child process stdin should receive input from master process stdin
// child process stdout should send data to master process stdout
