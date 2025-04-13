import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import fs from 'node:fs';
import zlib from 'node:zlib';

const compress = async () => {
    const fileName = fileURLToPath(import.meta.url);
    const dirName = dirname(fileName);
    const sourcePath = join(dirName, 'files', 'fileToCompress.txt');
    const destPath = join(dirName, 'files', 'archive.gz');

    fs.createReadStream(sourcePath)
        .pipe(zlib.createGzip())
        .pipe(fs.createWriteStream(destPath))
        .on('finish', () => {
            console.log('The file was successfully compressed');
        })
        .on('error', (err) => {
            console.error(err.message);
        });
};

await compress();
