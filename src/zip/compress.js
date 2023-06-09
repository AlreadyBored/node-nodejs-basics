import { pipeline } from 'node:stream/promises';
import { createReadStream, createWriteStream } from 'node:fs';
import { createGzip } from 'node:zlib';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const compress = async () => {
    const readStream = createReadStream(path.resolve(__dirname, 'files', 'fileToCompress.txt'));
    const writeStream = createWriteStream(path.resolve(__dirname, 'files', 'archive.gz'));

    await pipeline(readStream, createGzip(), writeStream);
};

await compress();