import { createReadStream, createWriteStream, unlink } from 'fs';
import { createGunzip } from 'zlib';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const decompress = async () => {
    const __dirname = dirname(fileURLToPath(import.meta.url));
    const compressedFile = join(__dirname, 'files', 'archive.gz');
    const decompressedFile = join(__dirname, 'files', 'fileToCompress.txt');

    const readableStream = createReadStream(compressedFile);
    const writableStream = createWriteStream(decompressedFile);
    const gunzipStream = createGunzip();

    readableStream.pipe(gunzipStream).pipe(writableStream);

    return new Promise((resolve, reject) => {
        writableStream.on('finish', () => resolve());

        writableStream.on('error', (error) => {
            reject(error);
        });
    });
};

await decompress();