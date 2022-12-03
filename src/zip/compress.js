import zlib from 'node:zlib';
import fs from 'node:fs';
import { pipeline } from 'node:stream';
import process from 'node:process';

const compress = async () => {
    const readStream = fs.createReadStream('./files/fileToCompress.txt');
    const writeStream = fs.createWriteStream('./files/archive.gz');
    const gzip = zlib.createGzip();

    pipeline(readStream, gzip, writeStream, (err) => {
        if (err) {
            console.error('An error occurred:', err);
            process.exitCode = 1;
        }
    });
};

await compress();