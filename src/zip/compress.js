import { createReadStream, createWriteStream } from 'fs';
import { join } from 'path';
import { createGzip } from 'zlib';

const compress = async () => {
    const fileToCompressPath = join('files', 'fileToCompress.txt');
    const archivePath = join('files', 'archive.gz');

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
