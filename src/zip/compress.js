import { createGzip } from 'node:zlib';
import { createWriteStream, createReadStream } from 'node:fs';
import { resolve } from 'path';

const compress = async () => {
    const absoluteFilePath = await resolve('files', 'fileToCompress.txt');
    const stream = createReadStream(absoluteFilePath);
    stream
        .pipe(createGzip())
        .pipe(createWriteStream(`${absoluteFilePath}.gz`))
        .on("finish", () =>
                console.log(`Successfully compressed the file at ${absoluteFilePath}`)
        );
};

await compress();