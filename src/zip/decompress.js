import zlib from 'zlib';
import fs from 'fs';
import { pipeline } from 'stream';

export const decompress = async () => {
    const readStream = fs.createReadStream('./files/archive.gz');
    const writeStream = fs.createWriteStream('./files/fileToCompress.txt');
    const unzip = zlib.createUnzip();
    pipeline(readStream, unzip, writeStream, err => {
        if (err) {
            process.error('Decompression error!', err);
            process.exitCode = -1;
        }
    });
};

await decompress();