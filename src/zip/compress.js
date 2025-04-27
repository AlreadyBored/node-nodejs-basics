import { createReadStream, createWriteStream } from 'fs';
import { resolve } from 'path';
import { createGzip } from 'zlib';

const compress = async () => {
    const sourcePath = resolve(import.meta.dirname, 'files', 'fileToCompress.txt');
    const destPath = resolve(import.meta.dirname, 'files', 'archive.gz');

    const readStream = createReadStream(sourcePath);
    const writeStream = createWriteStream(destPath);
    const gzip = createGzip();

    readStream.pipe(gzip).pipe(writeStream);
};

await compress();
