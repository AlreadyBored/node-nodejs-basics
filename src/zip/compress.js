import { createReadStream, createWriteStream } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import { createGzip } from 'zlib';

const DIRNAME = dirname(fileURLToPath(import.meta.url));

const compress = async () => {
    const fileToCompressPath = join(DIRNAME, 'files', 'fileToCompress.txt');
    const archivePath = join(DIRNAME, 'files', 'archive.gz');

    const readStream = createReadStream(fileToCompressPath);
    const writeStream = createWriteStream(archivePath);
    const gzip = createGzip();

    readStream.on('error', () => {
        throw new Error('FS operation failed');
    });

    writeStream.on('error', () => {
        throw new Error('FS operation failed');
    });

    readStream.pipe(gzip).pipe(writeStream);
};

await compress();
