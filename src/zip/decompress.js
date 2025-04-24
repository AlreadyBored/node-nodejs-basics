import { createReadStream, createWriteStream } from 'node:fs';
import { createGunzip } from 'node:zlib';
import { pipeline } from 'node:stream/promises';

const OUTPUT_FILE = './src/zip/files/fileToCompress.txt';
const FILE_TO_UNZIP = './src/zip/files/archive.gz';

const decompress = async () => {
    const gunzip = createGunzip();
    const source = createReadStream(FILE_TO_UNZIP);
    const destination = createWriteStream(OUTPUT_FILE);

    try {
        await pipeline(source, gunzip, destination);
    } catch (err) {
        console.error('Cannot unzip:', err);
    }
};

await decompress();