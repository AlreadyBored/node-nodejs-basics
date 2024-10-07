import fs from 'fs';
import zlib from 'zlib';
import path from 'node:path';
import { getDirName } from '../fs/getDir.js';

const compress = async () => {

    const filePath1 = path.join(getDirName(import.meta.url), './files/fileToCompress.txt');
    const filePath2 = path.join(getDirName(import.meta.url), './files/archive.gz');
    const readStream = fs.createReadStream(filePath1);
    const writeStream = fs.createWriteStream(filePath2);

    const gzip = zlib.createGzip();

    readStream
        .pipe(gzip)
        .pipe(writeStream)
        .on('finish', () => {
            console.log('Done compressing');
        });
};

await compress();