import { createGzip } from 'node:zlib';
import { createReadStream, createWriteStream } from 'node:fs';

const compress = async () => {
    const filePath = new URL('files/fileToCompress.txt', import.meta.url);
    const zipPath  = new URL('files/archive.gz', import.meta.url);
    const readStream  = createReadStream(filePath);
    const writeStream = createWriteStream(zipPath);

    readStream
        .pipe(createGzip())
        .pipe(writeStream)
};

await compress();