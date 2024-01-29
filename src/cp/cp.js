import { fork } from "child_process";

const filePath = import.meta.dirname + "/files/script.js";

const spawnChildProcess = async (args) => {
  fork(filePath, args);
};

spawnChildProcess(["aboba", 123]);
