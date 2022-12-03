import { fork } from "node:child_process";

const spawnChildProcess = async (args) => {
  const modulePath = new URL("./files/script.js", import.meta.url);
  fork(modulePath, args);
};

spawnChildProcess();
