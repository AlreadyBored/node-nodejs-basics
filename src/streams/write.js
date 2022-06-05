import { createWriteStream } from 'fs';
import { join } from 'path';
import { getDirAndFilePath } from '../helpers.js';
import { pipeline } from 'stream';
import { promisify } from 'util';

const { __dirname } = getDirAndFilePath(import.meta);

const pipe = promisify(pipeline);

export const write = async () => {
    const pathFile = join(__dirname, 'files', 'fileToWrite.txt');

    const writeStream = createWriteStream(pathFile);

    await pipe(process.stdin, writeStream);
};

write();