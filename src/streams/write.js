import fs from 'node:fs';
import { resolve } from 'node:path';
import { getPath } from '../fs/utils.js';

const write = async () => {
    const __dirname = getPath(import.meta.url);
    const ws = fs.createWriteStream(resolve(__dirname, 'files', 'fileToWrite.txt'));
    process.stdin.pipe(ws);
};

await write();