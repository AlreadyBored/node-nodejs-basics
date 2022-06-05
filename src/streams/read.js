import { createReadStream } from 'fs';
import { join } from 'path';
import { getDirAndFilePath } from '../helpers.js';
import { pipeline } from 'stream';
import { promisify } from 'util';

const { __dirname } = getDirAndFilePath(import.meta);

const pipe = promisify(pipeline);

export const read = async () => {
    const pathFile = join(__dirname, 'files', 'fileToRead.txt');

    const readStream = createReadStream(pathFile);

    await pipe(readStream, process.stdout);
};

read();