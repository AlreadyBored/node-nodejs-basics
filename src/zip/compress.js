import { createReadStream, createWriteStream } from 'node:fs';
import { dirname, join } from "node:path";
import { createGzip } from 'node:zlib';
import { pipeline } from 'node:stream/promises';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));

const compress = async () => {
    const source = join(__dirname, 'files', 'fileToCompress.txt');
    const destination = join(__dirname, 'files', 'archive.gz');

    const readStream = createReadStream(source);
    const writeStream = createWriteStream(destination);
    const gzip = createGzip();

    try {
        await pipeline(
            readStream,
            gzip,
            writeStream
        );
    } catch (error) {
        throw new Error('FS operation failed');
    }
};

await compress();
