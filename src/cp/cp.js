//https://github.com/AlreadyBored/nodejs-assignments/blob/main/assignments/nodejs-basics/assignment.md#child-processes-srccp

import { fork } from "node:child_process";
import { getURLPath } from "../lib.js";

const spawnChildProcess = async (args) => {
  const childProcess = fork(getURLPath("./cp/files/script.js"));
  childProcess.send(args);
  childProcess.on("message", (msg) => {
    process.stdout.write(`Received from child process: ${msg}`);
  });
};

// Put your arguments in function call to test this functionality
spawnChildProcess(["arg1, arg2"]);
