import { createUnzip } from 'node:zlib';
import { promisify } from 'node:util';
import { pipeline } from 'node:stream';
import { createReadStream, createWriteStream } from 'node:fs';

const decompress = async () => {
    const pipe = promisify(pipeline);
    const gzip = createUnzip();
    const source = createReadStream('./src/zip/files/archive.gz');
    const destination = createWriteStream('./src/zip/files/fileToCompress.txt');
    await pipe(source, gzip, destination);
};

await decompress();
