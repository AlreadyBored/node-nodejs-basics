import { exec,fork,spawn } from 'child_process';
import path, { dirname } from 'path';
import { stderr, stdin, stdout } from 'process';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const srcPath = path.join(__dirname, 'files', 'script.js');

const spawnChildProcess = async (args) => {
    const forked = fork(srcPath, args);
};

spawnChildProcess(['hello','name']);