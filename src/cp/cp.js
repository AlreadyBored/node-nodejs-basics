import { fork } from "child_process";
import { join } from "path";

import { rootDir } from "./../fs/utils/fs.js";

const spawnChildProcess = async (args) => {
    const path = join(rootDir, "cp", "files", "script.js");
    fork(path, args);
};

spawnChildProcess(["arg1", "arg2"]);
