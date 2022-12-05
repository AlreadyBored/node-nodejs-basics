import { createGzip } from 'node:zlib';
import { createWriteStream, createReadStream } from 'node:fs';
import { resolve } from 'node:path';

const compress = async () => {
    const absoluteFilePath = await resolve('files', 'fileToCompress.txt');
    const stream = createReadStream(absoluteFilePath);
    stream
        .pipe(createGzip())
        .pipe(createWriteStream('./files/archive.gz'))
        .on("finish", () =>
                console.log(`Successfully compressed the file`)
        );
};

await compress();