import { createGzip } from 'node:zlib';
import {createWriteStream, createReadStream} from 'node:fs';
import { pipeline } from 'node:stream';
import process from 'node:process';

const compress = async () => {
    const gzip = createGzip();
    const source = createReadStream('./src/zip/files/fileToCompress.txt');
    const destination = createWriteStream('./src/zip/files/archive.gz');

    pipeline(source, gzip, destination, (err) => {
        if (err) {
            console.error('An error occurred:', err);
            process.exitCode = 1;
        }
    });
};

await compress();