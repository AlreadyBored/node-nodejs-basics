import zlib from 'node:zlib';
import fs from 'node:fs';
import { pipeline } from 'node:stream';
import process from 'node:process';

const decompress = async () => {
    const readStream = fs.createReadStream('./files/archive.gz');
    const writeStream = fs.createWriteStream('./files/fileToCompress.txt');
    const gzip = zlib.createUnzip();

    pipeline(readStream, gzip, writeStream, (err) => {
        if (err) {
            console.error('An error occurred:', err);
            process.exitCode = 1;
        }
    });
};

await decompress();