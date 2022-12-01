import { createWriteStream, createReadStream } from 'fs';
import { createGunzip } from 'zlib';
import { getDirname } from '../utils/index.js';

const __dirname = getDirname(import.meta.url);

const decompress = async () => {
    const readable = createReadStream(`${__dirname}/files/archive.gz`);
    const writable = createWriteStream(`${__dirname}/files/fileToCompress.txt`);

    readable.pipe(createGunzip()).pipe(writable);
};

await decompress();