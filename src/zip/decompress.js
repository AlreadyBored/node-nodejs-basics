import { createUnzip } from 'node:zlib';
import { pipeline } from 'node:stream';
import { createReadStream, createWriteStream } from 'node:fs';

const decompress = async () => {
    pipeline(
        createReadStream('./files/archive.gz'),
        createUnzip(),
        createWriteStream('./files/fileToCompress.txt'),
        (err) => {
            if (err) {
                console.error('Failed to decompress.', err);
            }
        }
    )
};

await decompress();