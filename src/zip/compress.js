import { createGzip } from 'node:zlib';
import { pipeline } from 'node:stream';
import { createReadStream, createWriteStream } from 'fs';
import { promisify } from 'node:util';

const pipe = promisify(pipeline);

const compress = async () => {
    try {
        const gzip = createGzip();
        const source = createReadStream('./files/fileToCompress.txt');
        const destination = createWriteStream('./files/archive.gz');
        await pipe(source, gzip, destination);
    } catch (err) {
        throw err;
    }
};

await compress();
