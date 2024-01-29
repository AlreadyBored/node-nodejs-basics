import path from "path";
import { getDirnameFromUrl } from "../utils/utils";
import { fork } from "child_process";

const __dirname = getDirnameFromUrl(import.meta.url);
const childModule = path.join(__dirname, "files", "script.js");

const spawnChildProcess = async (args) => {
    fork(childModule, args);
};

spawnChildProcess( [1, "a"]);
