import { createGzip } from 'node:zlib';
import { pipeline } from 'node:stream';
import { createReadStream, createWriteStream } from 'node:fs';

const compress = async () => {
    pipeline(
        createReadStream('./files/fileToCompress.txt'),
        createGzip(),
        createWriteStream('./files/archive.gz'),
        (err) => {
            if (err) {
                console.error('Failed to compress.', err);
            }
        }
    )
};

await compress();