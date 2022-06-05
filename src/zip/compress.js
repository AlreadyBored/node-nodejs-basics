//execute: node src/zip/compress
import fs from 'fs';
import path from 'path';
import zlib from 'zlib';

const toRead = path.resolve(path.dirname(''), 'src', 'zip', 'files', 'fileToCompress.txt');
const toWrite = path.resolve(path.dirname(''), 'src', 'zip', 'files', 'archive.gz');

export const compress = async () => {
    const input = fs.createReadStream(toRead);
    const output = fs.createWriteStream(toWrite);
    const gzip = zlib.createGzip();

    input.pipe(gzip).pipe(output);
};

compress();