import { fileURLToPath } from 'node:url';
import { createReadStream, createWriteStream } from 'node:fs';
import { pipeline } from 'node:stream';
import { createGzip } from 'node:zlib';

export const compress = async () => {
    const fileInputPath = await fileURLToPath(new URL('./files/fileToCompress.txt', import.meta.url));
    const fileOutputPath = await fileURLToPath(new URL('./files/archive.gz', import.meta.url));

    const readableStream = await createReadStream(fileInputPath);
    const writableStream = await createWriteStream(fileOutputPath);
    const zip = createGzip();

    pipeline(readableStream, zip, writableStream,
        (err) => {
            if (err) {
                console.error('Pipeline failed.', err);
            } else {
                console.log('Pipeline succeeded.');
            }
        });
};

compress();
