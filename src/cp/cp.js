import { fork } from "child_process";
import { join } from "path";

import { __dirname } from "./../fs/utils/fs.js";

const spawnChildProcess = async (args) => {
    const path = join(__dirname, "cp", "files", "script.js");
    fork(path, args);
};

spawnChildProcess(["arg1", "arg2"]);
