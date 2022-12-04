import { resolve } from 'path';
import fs from 'fs';
import zlib from 'zlib';

const compressedFile = resolve('src', 'zip', 'files', 'archive.gz');
const file = resolve('src', 'zip', 'files', 'fileToCompress.txt');

const decompress = async () => {
    fs.createReadStream(compressedFile)
        .pipe(zlib.createUnzip())
        .pipe(fs.createWriteStream(file));
};

await decompress();