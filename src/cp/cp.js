import { fork } from "node:child_process";

export const spawnChildProcess = async (args) => {
  let myArgs = process.argv.slice(2);
  const child = fork(`./src/cp/files/script.js`, myArgs, { silent: false });

  child.on("message", (msg) => {
    console.log(`stdout: ${msg}`);
  });
  child.on("error", (err) => {});
};

spawnChildProcess();
