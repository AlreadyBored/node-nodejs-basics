import {fork} from 'node:child_process';
import {dirname, join} from "node:path";
import {fileURLToPath} from "node:url";

const DIR_NAME = 'files'
const FILE_NAME = 'script.js';

const spawnChildProcess = async (args) => {
    const filePath = join(dirname(fileURLToPath(import.meta.url)), DIR_NAME, FILE_NAME);

    fork(filePath, args);
};

await spawnChildProcess(['someArgument1', 'someArgument2']);
