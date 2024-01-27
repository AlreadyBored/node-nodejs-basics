import { fork, spawn } from 'node:child_process';
import path from 'node:path';
import { getDir } from '../utils.js'

const cpScriptPath = path.join(getDir(import.meta.url), 'files', 'script.js');
const spawnChildProcess = async (args) => {
    fork(cpScriptPath, args);
};


spawnChildProcess( [ '4', '8', '15', '16', '23', 42]);
