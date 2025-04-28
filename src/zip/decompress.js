import { createReadStream, createWriteStream } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import { createGunzip } from 'zlib';

const DIRNAME = dirname(fileURLToPath(import.meta.url));

const decompress = async () => {
    const archivePath = join(DIRNAME, 'files', 'archive.gz');
    const fileToCompressPath = join(DIRNAME, 'files', 'fileToCompress.txt');

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
