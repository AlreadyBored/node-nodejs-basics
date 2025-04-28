import { createReadStream, createWriteStream } from 'fs';
import { join } from 'path';
import { createGunzip } from 'zlib';

const decompress = async () => {
    const archivePath = join('files', 'archive.gz');
    const fileToCompressPath = join('files', 'fileToCompress.txt');

    const readStream = createReadStream(archivePath);
    const writeStream = createWriteStream(fileToCompressPath);
    const gunzip = createGunzip();

    readStream.on('error', () => {
        throw new Error('FS operation failed');
    });

    writeStream.on('error', () => {
        throw new Error('FS operation failed');
    });

    readStream.pipe(gunzip).pipe(writeStream);
};

await decompress();
