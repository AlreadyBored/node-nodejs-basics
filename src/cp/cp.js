import cp from "node:child_process";
import { joinToURL } from "../helpers.js";

const spawnChildProcess = async (args) => {
  const scriptPath = joinToURL(import.meta.url, "files", "script.js");

  cp.fork(scriptPath, args, {
    stdio: ["inherit", "inherit", "inherit", "ipc"],
  });
};

const asd = {
  qwe: {},
};
asd.qwe = asd;

// Put your arguments in function call to test this functionality
spawnChildProcess([1, "someArgument2", asd]);
