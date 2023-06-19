import { createGzip } from 'node:zlib'
import { pipeline } from 'node:stream/promises'
import {
    createReadStream,
    createWriteStream,
} from 'node:fs'

const compress = async () => {
    const gzip = createGzip();
    const source = createReadStream('src/zip/files/fileToCompress.txt');
    const destination = createWriteStream('src/zip/files/archive.gz');

    await pipeline(source, gzip, destination);
};

await compress();
