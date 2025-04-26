import { createReadStream, createWriteStream } from 'node:fs';
import { dirname, join } from "node:path";
import { createGunzip } from 'node:zlib';
import { pipeline } from 'node:stream/promises';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));

const decompress = async () => {
    const source = join(__dirname, 'files', 'archive.gz');
    const destination = join(__dirname, 'files', 'fileToCompress2.txt');

    const readStream = createReadStream(source);
    const writeStream = createWriteStream(destination);
    const gunzip = createGunzip();

    try {
        await pipeline(
            readStream,
            gunzip,
            writeStream
        );
    } catch (error) {
        throw new Error('FS operation failed');
    }
};

await decompress();
