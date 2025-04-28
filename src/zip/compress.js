import {fileURLToPath} from 'url';
import {dirname, join} from 'path';
import {createReadStream, createWriteStream} from 'fs';
import {createGzip} from 'zlib';

const compress = async () => {
    // Write your code here
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = dirname(__filename);

    const fileToCompress = join(__dirname, 'files', 'fileToCompress.txt');
    const compressedFile = join(__dirname, 'files', 'archive.gz');

    const readStream = createReadStream(fileToCompress);
    const writeStream = createWriteStream(compressedFile);
    const gzip = createGzip();

    readStream
        .pipe(gzip)
        .pipe(writeStream)
        .on('error', () => {
            throw new Error('FS operation failed');
        });
};

await compress();