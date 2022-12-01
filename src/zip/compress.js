import { createWriteStream, createReadStream } from 'fs';
import { createGzip } from 'zlib';
import { getDirname } from '../utils/index.js';

const __dirname = getDirname(import.meta.url);

const compress = async () => {
    const readable = createReadStream(`${__dirname}/files/fileToCompress.txt`);
    const writable = createWriteStream(`${__dirname}/files/archive.gz`);

    readable.pipe(createGzip()).pipe(writable);
};

await compress();