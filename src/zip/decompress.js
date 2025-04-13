import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import fs from 'node:fs';
import zlib from 'node:zlib';

const decompress = async () => {
    const fileName = fileURLToPath(import.meta.url);
    const dirName = dirname(fileName);
    const destPath = join(dirName, 'files', 'fileToCompress.txt');
    const sourcePath = join(dirName, 'files', 'archive.gz');

    fs.createReadStream(sourcePath)
        .pipe(zlib.createGunzip())
        .pipe(fs.createWriteStream(destPath))
        .on('finish', () => {
            console.log('The file was successfully decompressed');
        })
        .on('error', (err) => {
            console.error(err.message);
        });
};

await decompress();
