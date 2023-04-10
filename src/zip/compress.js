import path from 'path';
import { fileURLToPath } from 'url';
import { createReadStream, createWriteStream } from 'fs';
import zlib from 'zlib';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const compress = async () => {
    const filePath = path.resolve(__dirname, 'files', 'fileToCompress.txt');
    const compressedPath = path.resolve(__dirname, 'files', 'archive.gz');

    const readStream = createReadStream(filePath);
    const writeStream = createWriteStream(compressedPath);
    const gzipStream = zlib.createGzip();

    readStream.pipe(gzipStream).pipe(writeStream);
};

await compress();
