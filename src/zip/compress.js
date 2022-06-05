import { createReadStream, createWriteStream } from 'fs';
import { pipeline } from 'stream'
import { join } from 'path';
import { promisify } from 'util';
import { createGzip } from 'zlib';
import { getDirAndFilePath } from '../helpers.js';

const { __dirname } = getDirAndFilePath(import.meta);

const pipe = promisify(pipeline);

export const compress = async () => {
    const source = createReadStream(join(__dirname, 'files', 'fileToCompress.txt'));
    const dest = createWriteStream(join(__dirname, 'files', 'archive.gz'));
    const gzip = createGzip();

    await pipe(source, gzip, dest);
};

compress();