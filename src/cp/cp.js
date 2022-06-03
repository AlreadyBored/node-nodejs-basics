import path from 'node:path';
import {fileURLToPath} from 'node:url';
import {spawn} from 'node:child_process';

export const spawnChildProcess = async (args) => {
    const __dirname = path.dirname(fileURLToPath(import.meta.url));
    const cpScript = 'script.js';
    const cpSubFolder = 'files';
    const cpAbsolutePath = path.join(__dirname, cpSubFolder, cpScript);

    spawn(process.execPath, [cpAbsolutePath, ...args], {
        stdio: 'inherit'
    });
};

spawnChildProcess(process.argv);