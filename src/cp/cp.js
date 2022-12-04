import { fork } from "child_process";

import { getPath } from "./../fs/utils/fs.js";

const spawnChildProcess = async (args) => {
    const path = getPath("cp", "files", "script.js");
    fork(path, args);
};

spawnChildProcess(["arg1", "arg2"]);
