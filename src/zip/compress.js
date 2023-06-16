import * as zlib from 'node:zlib';
import { createReadStream, createWriteStream } from 'node:fs';

const compress = async () => {
    const gz = zlib.createGzip();
    const write = createWriteStream('src/zip/files/archive.gz');
    const read = createReadStream('src/zip/files/fileToCompress.txt');

    read.pipe(gz).pipe(write);
};

await compress();
