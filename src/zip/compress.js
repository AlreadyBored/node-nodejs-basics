import { resolve } from 'path';
import fs from 'fs';
import zlib from 'zlib';

const file = resolve('src', 'zip', 'files', 'fileToCompress.txt');
const compressedFile = resolve('src', 'zip', 'files', 'archive.gz');

const compress = async () => {
    fs.createReadStream(file)
        .pipe(zlib.createGzip())
        .pipe(fs.createWriteStream(compressedFile));
};

await compress();