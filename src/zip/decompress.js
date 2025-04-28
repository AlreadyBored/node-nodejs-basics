import { createReadStream, createWriteStream } from 'node:fs';
import { pipeline } from 'node:stream/promises';
import { createUnzip } from 'node:zlib';

const decompress = async () => {
    const source = createReadStream('src/zip/files/archive.gz');
    const output = createWriteStream('src/zip/files/fileToCompress.txt');
    const gzip = createUnzip();

    await pipeline(source, gzip, output);
};

await decompress();