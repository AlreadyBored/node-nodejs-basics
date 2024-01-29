import { createUnzip } from 'node:zlib';
import {createWriteStream, createReadStream} from 'node:fs';
import { pipeline } from 'node:stream';
import process from 'node:process';

const decompress = async () => {
    const gzip = createUnzip();
    const destination = createWriteStream('./src/zip/files/fileToCompress.txt');
    const source = createReadStream('./src/zip/files/archive.gz');

    pipeline(source, gzip, destination, (err) => {
        if (err) console.log(err);
        process.exitCode = 1;
    });
};

await decompress();