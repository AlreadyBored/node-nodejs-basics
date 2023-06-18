import { fork } from 'child_process';
import { resolve } from 'path';

import { getDirPath } from '../fs/utils.js';
import { FOLDER_NAME } from '../fs/constants.js';


const SCRIPT_FILE_NAME = 'script.js';

const dirPath = getDirPath(import.meta.url);
const scriptPath = resolve(dirPath, FOLDER_NAME, SCRIPT_FILE_NAME);

const spawnChildProcess = async (args) => {
    fork(scriptPath, args);
};

// Put your arguments in function call to test this functionality
spawnChildProcess( ['argument1', 'argument2']);
