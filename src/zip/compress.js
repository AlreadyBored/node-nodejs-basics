import { createReadStream, createWriteStream } from 'node:fs';
import { pipeline } from 'node:stream/promises';
import { createGzip } from 'node:zlib';

const compress = async () => {
    const source = createReadStream('src/zip/files/fileToCompress.txt');
    const output = createWriteStream('src/zip/files/archive.gz');
    const gzip = createGzip();

    await pipeline(source, gzip, output);
};

await compress();