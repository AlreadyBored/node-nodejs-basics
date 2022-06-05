import { resolve, dirname } from 'path';
import { fork } from 'child_process';
import { fileURLToPath } from 'url';

export const spawnChildProcess = async (args) => {
    const __dirname = dirname(fileURLToPath(import.meta.url));
    fork(resolve(__dirname, 'files', 'script.js'), args.slice(2));
};

spawnChildProcess(process.argv);