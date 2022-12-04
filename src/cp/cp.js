import path from "path";
import { fork } from "child_process";

import { getPath } from "../helpers/getPath.js";

const spawnChildProcess = async (args) => {
  const { __dirname } = getPath(import.meta.url);
  const fullPath = path.join(__dirname, "/files", "script.js");

  fork(fullPath, args);
};


spawnChildProcess(["one", "two"]);

