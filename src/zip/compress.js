import { createReadStream, createWriteStream } from 'node:fs';
import { createGzip } from 'node:zlib';
import { pipeline } from 'node:stream/promises';

const FILE_TO_ZIP = './src/zip/files/fileToCompress.txt';
const OUTPUT_FILE = './src/zip/files/archive.gz';

const compress = async () => {
    const gzip = createGzip();
    const source = createReadStream(FILE_TO_ZIP);
    const destination = createWriteStream(OUTPUT_FILE);

    try {
        await pipeline(source, gzip, destination);
    } catch (err) {
        console.error('Cannot create zip:', err);
    }
};

await compress();