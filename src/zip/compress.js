import { createReadStream, createWriteStream, unlink } from 'fs';
import { createGzip } from 'zlib';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const compress = async () => {
    const __dirname = dirname(fileURLToPath(import.meta.url));
    const sourceFile = join(__dirname, 'files', 'fileToCompress.txt');
    const compressedFile = join(__dirname, 'files', 'archive.gz');

    const readableStream = createReadStream(sourceFile);
    const writableStream = createWriteStream(compressedFile);
    const gzipStream = createGzip();

    readableStream.pipe(gzipStream).pipe(writableStream);

    return new Promise((resolve, reject) => {
        writableStream.on('finish',
            () => unlink(sourceFile, (err) => (err) ? reject(err) : resolve()));

        writableStream.on('error', (error) => reject(error));
    });
};

await compress();