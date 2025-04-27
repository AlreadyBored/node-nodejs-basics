import { createReadStream, createWriteStream } from 'fs';
import { resolve } from 'path';
import { createGunzip } from 'zlib';

const decompress = async () => {
    const sourcePath = resolve(import.meta.dirname, 'files', 'archive.gz');
    const destPath = resolve(import.meta.dirname, 'files', 'fileToCompress.txt');

    const readStream = createReadStream(sourcePath);
    const writeStream = createWriteStream(destPath);
    const gunzip = createGunzip();

    readStream.pipe(gunzip).pipe(writeStream);
};

await decompress();
