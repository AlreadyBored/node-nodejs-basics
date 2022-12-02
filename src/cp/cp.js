import {fork} from "node:child_process"
import {fileURLToPath} from "node:url"

const spawnChildProcess = async (args) => {
    // Write your code here
    const pathToFile = fileURLToPath(new URL("./files/script.js", import.meta.url))
    fork(pathToFile, args)
};

spawnChildProcess(process.argv);