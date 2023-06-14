import { pipeline } from 'node:stream/promises';
import { createReadStream, createWriteStream } from 'node:fs';
import { createUnzip } from 'node:zlib';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const decompress = async () => {
    const readStream = createReadStream(path.resolve(__dirname, 'files', 'archive.gz'));
    const writeStream = createWriteStream(path.resolve(__dirname, 'files', 'fileToCompress.txt'));

    await pipeline(readStream, createUnzip(), writeStream);
};

await decompress();