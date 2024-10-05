import { createGzip } from 'node:zlib';
import { promisify } from 'node:util';
import { pipeline } from 'node:stream';

import { createReadStream, createWriteStream } from 'node:fs';

const compress = async () => {
    const pipe = promisify(pipeline);
    const gzip = createGzip();
    const source = createReadStream('./src/zip/files/fileToCompress.txt');
    const destination = createWriteStream('./src/zip/files/archive.gz');
    await pipe(source, gzip, destination);
};

await compress();
