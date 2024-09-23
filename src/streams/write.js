
import { createWriteStream } from 'fs';
import path from 'path';

import { getDirPath } from '../utils/getDirPath.js';


const write = async () => {
    const dirPath = getDirPath(import.meta.url);
    const filePath = path.join(dirPath, 'files', 'fileToWrite.txt');

    const ws = createWriteStream(filePath);
    process.stdin.pipe(ws)
};

await write();