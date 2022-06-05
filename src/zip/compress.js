import zlib from 'zlib';
import fs from 'fs';
import { pipeline } from 'stream';

export const compress = async () => {
    const readStream = fs.createReadStream('./files/fileToCompress.txt');
    const writeStream = fs.createWriteStream('./files/archive.gz');
    const gzip = zlib.createGzip();
    pipeline(readStream, gzip, writeStream, err => {
        if (err) {
            process.error('Compression error!', err);
            process.exitCode = -1;
        }
    });
};

await compress();